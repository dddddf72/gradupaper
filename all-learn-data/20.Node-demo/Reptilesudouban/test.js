// const puppeteer = require('puppeteer-core');
// //find_chrome模块来源于GoogleChromeLabs的Carlo,可以查看本机安装Chrome目录，详细请查看底部博客,

// const findChrome = require('./node_modules/carlo/lib/find_chrome');

// (async () => {
//   let findChromePath = await findChrome({});
//   let executablePath = findChromePath.executablePath;
//   console.log(executablePath)
//   const browser = await puppeteer.launch({
//     executablePath,
//     headless: false
//   });

//   const page = await browser.newPage();
//   await page.goto('http://www.baidu.com/');
//   /*
//   	dosomeThing
//   */

//   await browser.close();
// })();


const router = require("koa-router")();
rout
    require("puppeteer-chromium-resolver")({
        //hosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"]
    }).then(function (revisionInfo) {
        console.log("Chromium revision installed.");
     var browser = await revisionInfo.puppeteer.launch({
            headless: false,
            executablePath: revisionInfo.executablePath
        });
        
    });
    
