var index = async ctx => {
    const cheerio = require("cheerio")
    const pcr = require("puppeteer-chromium-resolver");
    const stats = await pcr();
    const browser = await stats.puppeteer.launch({
        executablePath: stats.executablePath
    })
    const page = await browser.newPage();
    await page.waitForTimeout(1000);
    var num = ctx.request.query.start;
    await page.goto(`https://movie.douban.com/top250?start=${num}`)
    var content = await page.content();
    const $ = cheerio.load(content, { decodeEntities: false })
    let items = $(".grid_view").find(".item");
    let arr = [];
    items.each((index, value) => {
        let pic = $(value).find(".pic img").attr("src");
        let title = $(value).find(".info .hd .title").html();
        let raiting = $(value).find(".rating_num").html();
        let id = Number($(value).find(".pic a").attr("href").replace(/[^\d]/g, ""))
        console.log(typeof (id))
        arr.push({
            pic,
            title,
            raiting,
            id
        })
        ctx.body = {
            code: 200,
            result: arr,
            total: arr.length
        }
    })
}
module.exports = index;