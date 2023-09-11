var detail = async ctx=>{
    const cheerio = require("cheerio")
    const puppeteer = require("puppeteer")
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
        await page.waitForTimeout(1000);
        var {id} = ctx.request.query;
        //5340866003
        await page.goto(`https://music.163.com/#/playlist?id=${id}`)
        var iframe = await page.$("#g_iframe");
        var frame = await iframe.contentFrame();
        var content = await frame.content();
        const $ = cheerio.load(content,{decodeEntities:false})
        var upme = [];
        var id = $(".cnt .cntc #content-operation").attr("data-rid")
        var coverImage = $(".g-wrap6 .cover img").attr("src")
        var title = $(".cnt .tit h2").html();
        var content = $("")
            upme.push({id,coverImage,title})
        var songlists = $(".m-table tbody tr");
        var songname = [];
        songlists.each((index,ele)=>{
            let name = $(ele).find(".txt b").attr("title");
            let time = $(ele).find(".s-fc3 span").html();
            let artist = $(ele).find("td:nth-child(4) .text").attr("title")
            let zhuanji = $(ele).find("td:nth-child(5) .text a").attr("title")
            songname.push({name,time,artist,zhuanji})
        })
    //     })
    await browser.close();
           ctx.body = {
               code:200,
               msg1:"专辑的数据",
               result1:upme,
               msg2:"歌单的数据",
               result2:songname,
               total:songname.length
        }
        
}

module.exports = detail;