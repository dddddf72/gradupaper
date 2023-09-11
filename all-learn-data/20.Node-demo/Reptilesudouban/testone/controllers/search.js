var search = async ctx=>{
    const cheerio = require("cheerio");
    const PCR = require("puppeteer-chromium-resolver");
    const stats = await PCR();
    const browser = await stats.puppeteer.launch({
        executablePath:stats.executablePath
    });
    const page = await browser.newPage();
await page.waitForTimeout(1000);
        var key = ctx.query.s;
        key = encodeURIComponent(key);
await page.goto(`https://music.163.com/#/search/m/?id=2434408895&s=${key}&type=10`);
        var iframe = await page.$("#g_iframe");
        var frame = await iframe.contentFrame();
        var content =await frame.content();
    const $ = cheerio.load(content,{decodeEntities:false});
        var arr = [];
        var items = $(".m-cvrlst li");
            items.map((index,ele)=>{
        let picUrl = $(ele).find(".u-cover img").attr("src");
        let songname = $(ele).find(".dec a").attr("title");
        let artist = $(ele).find(".s-fc3").html();
            arr.push({picUrl,songname,artist})
            
})

await browser.close();
    ctx.body=arr;
}
module.exports = search;