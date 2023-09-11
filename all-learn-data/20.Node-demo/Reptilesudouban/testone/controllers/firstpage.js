var firstpage = async ctx=>{
    const cheerio = require("cheerio")
    const PCR = require("puppeteer-chromium-resolver")
    const stats = await PCR();
    const browser = await stats.puppeteer.launch({
        executablePath: stats.executablePath
    })
    const page =    await browser.newPage();
                    await page.waitForTimeout(1000)
                    await page.goto("https://music.163.com/")
    // var res = await page.$eval(".logo a",ele=>{ele.innerHTML}
    //contentFrame去获取iframe中的html结构
        var iframe = await page.$("#g_iframe");//page.waitForSelector
        var frame = await iframe.contentFrame();
        var content = await frame.content();
    const $ = cheerio.load(content,{decodeEntities:false})
        //轮播开始
        var banner = $(".wrap .ban-img img").attr("src")
        // 轮播结束
        // 热门推荐开始
        var hot = [];
        var items = $("#discover-module ul.m-cvrlst>li");
            items.each((index,ele)=>{
            let name = $(ele).find(".dec a").text().replace(/\n/g,"");
            let id = $(ele).find(".dec a").attr("data-res-id");
            let playCount = $(ele).find(".nb").text();
            let coverImage = $(ele).find(".u-cover img").attr("src");
                hot.push({name,id,playCount,coverImage})
        })
        // 热门推荐结束
        // 新碟上架开始
        var newcd = [];
        var new_Cd = $("#discover-module ul.roller-flag li");
        new_Cd.each((index,ele)=>{
            // let name = $(ele).find(".msk").attr("title");
            // let label = $(ele).find(".tit").attr("title")
            let Images = $(ele).find(".u-cover img").attr("data-src");
            let songname = $(ele).find(".f-thide a").attr("title");
            let artist = $(ele).find(".tit.f-thide").attr("title");
            newcd.push({Images,songname,artist})
        })
        // 新碟上架结束
        await browser.close();
           ctx.body = {
               code:200,
               mag1:"轮播的数据",
               result1:banner,
               msg2:"热门推荐的数据",
               result2:hot,
               total1:hot.length,
               msg3:"新碟上架的数据",
               result3:newcd,
               total2:newcd.length   
           }   
}
module.exports = firstpage;