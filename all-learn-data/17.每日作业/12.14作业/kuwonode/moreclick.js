const puppeteer = require('puppeteer');
(async()=>{
    const browser = await puppeteer.launch({
        headless:false,  
        slowMo:200,
        defaultViewport:null
      });
      const page = await browser.newPage();
      await page.goto('https://www.baidu.com');
     var news = await page.$("#s-top-left a:first-child");
     await news.click()
     var ni = await page.$("#page-news li")
     await ni.click()
     await page.waitForTimeout(1000) 
    //   await browser.close();   
})();
