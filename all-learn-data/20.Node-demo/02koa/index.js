// const koa = require("koa");
// const app = new koa();
// app.use(async (ctx,next)=>{
//     console.log(1)
//     await next();
//     console.log(4)
// })
// app.use(async (ctx,next)=>{
//     console.log(2);
//     await next()
//     console.log(3)
// })
// app.listen(8080)
const url ="http://movie.douban.com/top250"
const koa = require("koa");
const app = new koa();
const cheerio = require("cheerio");
const Router = require("koa-router");
const router = new Router(); //不写也行
const $=require("jquery");
const axios = require("axios");
router.get("/subject/:id",async ctx=>{
    let id = ctx.request.params;
    let url =`https://movie.douban.com/subject/${id}`

    ctx.body ="detail"
})
router.get("/search",async ctx=>{
    // console.log(ctx.query)   //
    var keyword = ctx.query.keyword;
    keyword = encodeURIComponent(keyword);
    console.log(keyword)
    let url = `https://www.douban.com/search?q=${keyword}`
    console.log(url)
    var html = await axios.get(url);
    // console.log(html.data)  //本质为字符串，typeOf=string
    const $ = cheerio.load(html.data,{decodeEntities:false});
    let items = $(".result-list").find(".result");
    let arr = [];
    items.each((index,value)=>{
        
    let title = $(value).find(".title h3 a").html();
    let rating_nums = $(value).find(".rating_nums").html();
    arr.push({
        title,
        rating_nums
    })
})
    ctx.body = {
        code:200,
        result:arr,
        msg:"搜索页的数据",
        total:arr.length
    }
})
router.get("/douban",async ctx=>{
    console.log(ctx.query)
    var {start} = ctx.request.query
    if(start==undefined){
        start = 0;
    }
    var html = await axios.get(url+`?start=${start}`);
    // console.log(html.data)  //本质为字符串，typeOf=string
    const $ = cheerio.load(html.data,{decodeEntities:false}); //解码设置为false,中文不会乱码
    
    var title = $("#content h1").html();
    // console.log(title)
    var result= [];
    var items = $(".grid_view .item");

items.each((index,value)=>{
    var imgUrl = $(value).find(".pic img").attr("src");
    var title = $(value).find(".pic img").attr("alt");
    var labels = $(value).find(".bd p").html().trim().split("<br>")[1].trim().split("/").map(item=>item.trim())
    var rating_num = $(value).find(".star .rating_num").html()
    var evaluate = $(value).find(".star span:last-child").html().replace(/[^\d]/g,"")
    slogo = $(value).find(".quote .inq").html()
    result.push({
        imgUrl,
        title,
        labels,
        rating_num,
        evaluate,
        slogo
        
    })
})
ctx.body = result;
})


// router.get("/more",async ctx=>{
//     ctx.body ="more"
// })
app.use(router.routes());
// app.use(router.allowedMethods)//不写也可以，默认有
app.listen(8080)

// 1.抓取豆瓣
//2.解析douban 