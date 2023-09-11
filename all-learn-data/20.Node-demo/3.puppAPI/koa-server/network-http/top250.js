const request = require("superagent");
require("superagent-charset")(request);
const cheerio = require("cheerio");
async function run(start) {
    console.log(start)
    let url = `https://movie.douban.com/top250?start=${start}`
    // 1.抓取页面
    let res = await request.get(url).charset("utf-8");
    // 2.解析html页面
    const $ = cheerio.load(res.text, {
        decodeEntities: false  //就不会出现中文乱码的问题了
    })
    let items = $(".grid_view").find(".item");
    let arr = [];
    items.each(function(index,value){
        let pic = $(value).find(".pic img").attr("src");
        let title = $(value).find(".info .hd .title").html();
        let rating  = $(value).find(".rating_num").html();
        let slogo = $(value).find(".quote .inq").html();
        let id =  $(value).find(".pic a").attr("href").replace(/[^\d]/g,"");
        arr.push({
            pic:pic,
            title:title,
            raiting:rating,
            slogo:slogo,
            id
        })
    })
    return  arr;
   
}
module.exports = run;