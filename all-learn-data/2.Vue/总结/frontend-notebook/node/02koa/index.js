const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const router = new Router();
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://movie.douban.com/top250"
router.get("/douban", async ctx => {
    console.log(ctx.request.query)
    var { start } = ctx.request.query
    console.log(start)
    if (start == undefined) {
        start = 0;
    }
    var html = await axios.get(url + `?start=${start}`);
    const $ = cheerio.load(html.data, {
        decodeEntities: false   //解码设置为false,中文不会乱码
    });
    var result = [];
    var items = $(".grid_view .item");
    items.each((index, value) => {
        var imgUrl = $(value).find(".pic img").attr("src");
        var title = $(value).find(".pic img").attr("alt")
        var labels = $(value).find(".bd p").html().trim().split("<br>")[1].trim().split("/").map(item => item.trim())
        var rating_num = $(value).find(".star .rating_num").html()
        var evaluate = $(value).find(".star span:last-child").html().replace(/[^\d]/g, "")
        var slogo = $(value).find(".quote .inq").html()
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

router.get("/subject/:id", ctx => {
    let { id } = ctx.request.params;
    let url = `https://movie.douban.com/subject/${id}/`;
    console.log(url)
    ctx.body = "detail"
})
router.get("/search", async ctx => {
    var keyword = ctx.query.keyword;
    keyword = encodeURIComponent(keyword);
    console.log(keyword)
    let url = `https://www.douban.com/search?q=${keyword}`
    var html = await axios.get(url);
    console.log(html.data)
    const $ = cheerio.load(html.data, {
        decodeEntities: false   //解码设置为false,中文不会乱码
    });
    let items = $(".result-list").find(".result");
    let arr = [];
    items.each((index,value)=>{
        let title  = $(value).find(".title h3 a").html();
        let rating_nums = $(value).find(".rating_nums").html()
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
/* 
1.配置 2.路由  3.http请求 4.处理数据
 */
app.use(router.routes());
app.listen(8080)
/*
1.axios抓取豆瓣
2.cheerio解析页面
3.返回数据给前端
 */