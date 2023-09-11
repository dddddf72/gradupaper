## 1-1 起步

```js
const puppeteer = require('puppeteer');

(async () => {
    /* 1.新建一个浏览器的实例 */
  const browser = await puppeteer.launch({
      headless:false
  });
  /* 2.新建一个页面 */
  const page = await browser.newPage();
  /* 3.到达某个页面 */
  await page.goto('http://www.kuwo.cn/search/list?key=你');
  /* 4.在页面停顿3s */
  await page.waitForTimeout(5000)
  /* 5.截图 */
  await page.screenshot({path: 'example.png'});
  /* 6.关闭浏览器 */
  await browser.close();
})();
```

## 1-2  抓取数据

```js
const puppeteer = require('puppeteer');
const cheerio = require("cheerio");
(async () => {
  const browser = await puppeteer.launch({
      headless:false,
      defaultViewport:null
  });

  const page = await browser.newPage();
  await page.goto('http://www.kuwo.cn/search/list?key=你');
  await page.waitForTimeout(3000)
  var content  =  await page.content();

  var $ = cheerio.load(content,{
      decodeEntities:false
  })
  var item = $(".song_item")
  var arr = []
  item.each((index,value)=>{
    var title = $(value).find(".song_name a").html();
    arr.push({
      title
    })
  })
  console.log(arr)
  await browser.close();
})();
```

## 1-3 evaluate

```js
const puppeteer = require('puppeteer');
(async () => {
    /* 1.新建一个浏览器的实例 */
  const browser = await puppeteer.launch({
      headless:false,
      defaultViewport:null
  });
  /* 2.新建一个页面 */
  const page = await browser.newPage();
  /* 3.到达某个页面 */
  await page.goto('https://movie.douban.com/top250');
  /* 4.在页面停顿3s */
  await page.waitForTimeout(1000)
  /* 5.evaluate可以获取页面内容 */
  var res = await page.evaluate(()=>{
    var $ = window.jQuery;
    var content  = $("#content h1").html();
    return content
  })
  console.log(res)
  await browser.close();
})();
```

## 1-4 原生的也是可以抓

```js
const puppeteer = require('puppeteer');
(async () => {
    /* 1.新建一个浏览器的实例 */
  const browser = await puppeteer.launch({
      headless:false,
      defaultViewport:null
  });
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
  console.log(res)
  await browser.close();
})();
```

## 1-5 模块化

导出

```
//a.js
var a = 10;
module.exports = a;
```

导入

```
//b.js
var a = require("./a.js");
console.log(a);
```

