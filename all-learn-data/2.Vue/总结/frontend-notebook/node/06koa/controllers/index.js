/* 抓取网易云音乐 */
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
async function show(){
    const browser =await puppeteer.launch({
        defaultViewport:null
    })
    const page = await browser.newPage();
    await page.goto("https://music.163.com/")
    /* 1.先找找到iframe */
    var iframe =  await page.waitForSelector("#g_iframe")
    /* 2.contentFrame去获取iframe中的html结构 */
    var frame = await iframe.contentFrame();
    /* 3.抓取 */
    var content = await frame.content();
    const $  = cheerio.load(content,{
        decodeEntities:false
    })
    var primary = {

    }
    var hot = [];
    var banner = $(".wrap .ban-img img").attr("src");
    var items = $("#discover-module ul.m-cvrlst>li")
    
    items.each((index,ele)=>{
        var name = $(ele).find(".dec a").text().replace(/\n/g,"");
        var id = $(ele).find(".dec a").attr("data-res-id")
        var playCount = $(ele).find(".nb").text()
        var coverImage = $(ele).find(".u-cover img").attr("src");
        hot.push({
            name,
            id,
            playCount,
            coverImage
        })
    })
    primary.banner = banner;
    primary.hot = hot;
    return primary;
}
module.exports = show;