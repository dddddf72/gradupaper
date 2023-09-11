/* 在安居客注册页面中输入 */
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
async function show(){
    const browser =await puppeteer.launch({
        headless:false,
        defaultViewport:null
    })
    const page = await browser.newPage();
    await page.goto("https://login.anjuke.com/login/form?from=register")
    /* 1.先找找到iframe */
    var iframe =  await page.waitForSelector("#iframeLoginIfm")
    /* 2.contentFrame去获取iframe中的html结构 */
    var frame = await iframe.contentFrame();
    /* 3.抓取 */
    var input = await frame.$("#phoneIpt");
    await input.type("189")
}
show()