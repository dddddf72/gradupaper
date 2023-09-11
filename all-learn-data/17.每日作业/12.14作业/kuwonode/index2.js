const url ="https://kuwo.cn/playlists"
const koa = require("koa");
// const $ = require("jquery");
const Router = require("koa-router");
const cheerio = require("cheerio");
const app = new koa();
const router = new Router();
const axios = require("axios");
const puppeteer = require("puppeteer");
router.get("/detail/:id",async ctx=>{
    let {id} = ctx.params;
    console.log(id)
    let url =`https://www.kuwo.cn/playlist_detail/${id}`
    console.log(url)
    let html = await axios.get(url);
    const $ = cheerio.load(html.data,{decodeEntities:false})
    let items=$(".album_list li")
    console.log(items)
    var detail = [];
    var comment =[];
    items.each((index,value)=>{
        var songname = $(value).find(".song_name a").html();
        var songer = $(value).find(".song_artist span").html();
        var songtime = $(value).find(".song_time span").html();
        detail.push({
            songname,
            songer,
            songtime
        })
    })
    var comments = $("new-comment-out div");
    comments.each((index,value)=>{
        // var comimg = $(value).find("img").html();
        var comname = $(value).find(".each-comment .each-comment-nickname span").html();

        comment.push({
            comname,
        })
    })
    ctx.body={
        code:200,
        result:detail,
        total:detail.length,
        result1:comment,
        total1:comment.length,
        msg:"查找的数据",
    }
})
router.get("/kuwo",async ctx=>{
    var html = await axios.get(url);
    
    // console.log(html.data)
    ctx.set('Access-Control-Allow-Origin','*')

    const $ =cheerio.load(html.data,{decodeEntities:false})
    
    // console.log(html)
    var result = [];
    var items = $(".rec_list .item")
    items.each((index,value)=>{
        var reg = /[^\d]$/;
        var imgUrl = $(value).find(".pic_out img").attr("src");
        var imgname = $(value).find(".pic_out img").attr("alt");
        var count = $(value).find(".count").html().split("</i>")[1].trim().replace(reg,"");
        result.push({
            imgUrl,
            imgname,
            count
        })
    })
    ctx.body=result;
})
app.use(router.routes())
app.listen(4400);