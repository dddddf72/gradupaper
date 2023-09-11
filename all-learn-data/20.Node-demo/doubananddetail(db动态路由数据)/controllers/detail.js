var detail = async ctx => {
    const cheerio = require("cheerio")
    const pcr = require("puppeteer-chromium-resolver");
    const stats = await pcr();
    const browser = await stats.puppeteer.launch({
        executablePath: stats.executablePath
    })
    const page = await browser.newPage();
    await page.waitForTimeout(1000);
    let { id } = ctx.request.params;
    await page.goto(`https://movie.douban.com/subject/${id}`)
    var content = await page.content();
    const $ = cheerio.load(content, { decodeEntities: false })
    let arr = [];
    let title = $("#content").find("span[property='v:itemreviewed']").html();
    let year = $("#content").find(".year").html();
    let picone = $("#content").find("img[rel='v:image']").attr("src");
    let plot = $("#content").find("#info>span:nth-child(8)").html();
    let criminal = $("#content").find("#info>span:nth-child(9)").html();
    let toronto = $("#content").find("span[property='v:initialReleaseDate']").html();;
    let amer = "美国";
    let pianchang = "片长:"
    let time = $("#content").find("span[property='v:runtime']").html();
    let rating = $("#content").find(".rating_num").html();
    let comment = $("#content").find(".rating_people").text().replace(/[^\d]/g, "");
    let jianjie = $("#content").find(".all").html()
    if (!jianjie) {
        jianjie = $("#content").find("span[property='v:summary']").html()
    }
    let yanyuan = $("#content").find(".celebrities-list li");
    let play = [];
    arr.push({
        title, picone, year, plot, criminal, toronto, amer, pianchang, time, rating, comment, jianjie, play
    })
    yanyuan.each((index, value) => {
        let ppic = $(value).find("a>div").attr("style").split("url")[1].replace(/[()]/g, "");
        let pname = $(value).find("a").attr("title");
        let role = $(value).find("div .role").html();
        play.push({
            ppic, pname, role
        })
    })
    ctx.body = {
        result: arr
    }
}
module.exports = detail;