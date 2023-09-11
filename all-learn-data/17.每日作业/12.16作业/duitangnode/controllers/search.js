var search = async ctx=>{
    const puppeteer = require("puppeteer");
    const browser =await puppeteer.launch();
    const page = await browser.newPage();
    var keyword = ctx.query.kw;
    keyword = encodeURIComponent(keyword);
    console.log(keyword)
    await page.goto(`https://www.duitang.com/search/?kw=${keyword}`)
    await page.waitForTimeout(1000)
    var res = await page.evaluate(()=>{
        const $ = window.jQuery;
        let items = $(".woo-pcont .j");
        let arr = [];
        items.each((index,value)=>{
            let imageUrl = $(value).find(".a img").attr("src");
            let title = $(value).find(".wooscr .g").html();
            let like = $(value).find(".wooscr .d2 span").html();
            let star = $(value).find(".wooscr .d1 span").html();

            let user = [];
            
            let users = $(value).find(".wooscr ul");
            users.each((index,value)=>{
                let reg = / /
                let avatar = $(value).find(".f img").attr("src");
                let name = $(value).find("p a").html();
                let label = $(value).find("p span a").html();
                user.push({
                    avatar,
                    name,
                    label
                })
            })
            let id = $(value).find(".mbpho a").attr("href").split("=")[1];
            arr.push({
                imageUrl,
                title,
                like,
                star,
                user,
                id
            })
        })
        return arr;
    })
    ctx.body = res
}
module.exports = search;