const puppeteer = require("puppeteer");
const url = "https://www.duitang.com/";
(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: null, //可视区域最大化
    });
    const page = await browser.newPage();
    await page.goto(url)
    await page.waitForSelector(".content-detail>.dynamic-feed-item")
    const list = await page.$$eval(".content-detail>.dynamic-feed-item",ele=>{
      return ele.length;
    })
    console.log(list)
})()