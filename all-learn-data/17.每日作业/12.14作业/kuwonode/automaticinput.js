const puppeteer = require('puppeteer');
(async()=>{
    const browser = await puppeteer.launch({
        headless:false,  
        slowMo:200,
        defaultViewport:null
      });
      const page = await browser.newPage();
      await page.goto('http://www.baidu.com');
      
      var input = await page.$("#kw");
      await input.type("hello world");
    //   var btn = await page.$("#su");
    //  await btn.click()
      var res = await page.$eval("#su",ele=>{return ele.value})
      console.log(res) //输出百度一下
    //  await page.waitForTimeout(3000) 
    //   console.log(input)
      // await browser.close();   
})();
