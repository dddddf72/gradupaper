const url = "https://account.aliyun.com/register/register.html"
const puppeteer = require("puppeteer");
async function show(){
    const browser =await puppeteer.launch({
        headless:false,
        defaultViewport:null
    })
    const page = await browser.newPage();
    await page.goto(url)
    var iframe = await page.$("#alibaba-register-box");
    var frame = await iframe.contentFrame();

    var span = await frame.waitForSelector("#nc_1__scale_text");
    var position = await span.boundingBox();
    await page.mouse.move(position.x,position.y);
    await page.mouse.down();
    for(var i=0;i<position.width;i++){
        await page.mouse.move(position.x+i,position.y);
    }
    await page.mouse.up();
    console.log(position)
}
show()