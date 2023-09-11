const puppeteer = require('puppeteer');
async function show (){
    /* 1.新建一个浏览器的实例 */
  const browser = await puppeteer.launch();
  /* 2.新建一个页面 */
  const page = await browser.newPage();
  /* 3.到达某个页面 */
  await page.goto('https://movie.douban.com/top250');
  /* 4.在页面停顿3s */
  await page.waitForTimeout(1000)
  /* 5.evaluate可以获取页面内容 */
  var res = await page.evaluate(()=>{
    var content  = document.getElementById("content").getElementsByTagName("h1")[0].innerHTML;
    return content
  })
  await browser.close();
  return res;
}
module.exports = show;