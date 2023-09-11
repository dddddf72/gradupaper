const puppeteer = require('puppeteer');
async function show(){
// (async () => {
    // 新建一个浏览器的实例
  const browser = await puppeteer.launch({
    headless:false,  //有界面的，true为无界面
    slowMo:200
  });
  const page = await browser.newPage(); //新建一个页面
  await page.goto('https://movie.douban.com/top250');//到达某个页面
  await page.waitForTimeout(1000) //在页面等待/停顿的时间
var res = await page.evaluate(()=>{  //获取整个页面内容
    var $ =window.jQuery;   //当页面有JQuery时候，可以直接获取页面内容
    
    content = $("#content h1").html();
    return content
})
console.log(res)
  await browser.close();    //关闭浏览器实例
    return res;
}
module.exports =show;