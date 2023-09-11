const puppeteer = require("puppeteer");
const url = "https://account.aliyun.com/register/register.html";
async function show () {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport: null, //可视区域最大化
        ignoreDefaultArgs:['--enable-automation--'] //忽略验证
    });
}
show()