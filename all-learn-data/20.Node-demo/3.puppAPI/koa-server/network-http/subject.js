const cheerio = require('cheerio');
const request = require('superagent')
require('superagent-charset')(request)
const subject = async ctx=>{
    console.log(ctx.params)
    let {id} = ctx.params;
    let url =`https://movie.douban.com/subject/${id}`;
    
    let res = await request.get(url).charset("utf-8");
    let html = res.text;
    let $ = cheerio.load(html, {
        decodeEntities: false
    }) 

    
    let title = $("#content").find("h1 span:first-child").html();
    let year = $("#content").find("h1 .year").text()
    let summary = $("#content").find(".indent span[property='v:summary']").text()
    let pic = $("#content").find("#mainpic img").attr("src");
    let data ={
        title,
        year,
        summary,
        id,
        pic
    }
    ctx.body = {
        code:200,
        result:data
    }

}
module.exports = subject;