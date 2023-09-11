const puppeteer = require('puppeteer');
(async()=>{
    const browser = await puppeteer.launch({
        headless:false,  
        slowMo:200,
        defaultViewport:null
      });
      const page = await browser.newPage();
      await page.goto('https://gitee.com/login');
    var uesrname = await page.$("#user_login")
    await uesrname.type("13125006127")
    var pwd = await page.$("#user_password")
    await pwd.type("ST070404")
    var submit = await page.$(".submit");
    await submit.click();
     await page.waitForTimeout(3000) 
   
})();
