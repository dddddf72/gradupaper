var list = async ctx=>{
    const puppeteer = require("puppeteer");

    var url = "https://www.duitang.com/"

    const browser = await puppeteer.launch({});

    const page = await browser.newPage();

    await page.goto(url);

    var res = await page.evaluate(()=>{
        const $ = window.jQuery;
        var items = $(".content-detail .dynamic-feed-item");
        var arr = [];
        

        items.each((index,value)=>{
            var reg = /\n|\s+/g;
            let avatar = $(value).find(".user-info img").attr("src");
            let username = $(value).find(".user-desc .username").html();
            let label = $(value).find(".dynamic-album-desc").html().trim().replace(reg,"");
            let images = [];
            let imgs =$(value).find(".dynamic-multi-img-container a");
            imgs.map((index,value)=>{
            let url = $(value).find("img").attr("src");
            images.push({url})
        })

            let like = $(value).find(".like-action .detail-text").html();
            let star = $(value).find(".favorite-action .detail-text").html();
            let id = $(value).find(".item-id").attr("data-id");

            arr.push({
                avatar,
                username,
                label,
                images,
                like,
                star,
                id
            })
            console.log(arr)
        })
        return arr;
        
    })
    await page.waitForTimeout(1000)
    await browser.close();
    ctx.body = {
        code:200,
        result:res,
        msg:"获取的数据",
        total:res.length
    }
}
module.exports = list;