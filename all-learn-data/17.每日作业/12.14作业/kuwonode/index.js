const puppeteer = require('puppeteer');
const cheerio = require("cheerio");
async function show(){
// (async () => {
    // 1新建一个浏览器的实例
  const browser = await puppeteer.launch({
    // headless:false,  //2有界面的，true为无界面
    // slowMo:200,
    // defaultViewport:null   //使页面铺满整个屏幕
  });
  const page = await browser.newPage(); //3新建一个页面
  await page.goto('https://www.kuwo.cn/search/list?key=你');//4到达某个页面
  // await page.hover("html")
 await page.evaluate(()=>{
  var i=0;
  setInterval(function(){
  if(
   document.documentElement.scrollTop+
    document.documentElement.clientHeight>=
    document.documentElement.offsetHeight
  ){
   window.scrollTo(0,0);
   i=0;
  }else{
   window.scrollTo(0,(document.body.scrollHeight/5)*i);
  }
  i++;
  console.log(i);
  },1000);
 })
  await page.waitForTimeout(5000) //5在页面等待/停顿的时间
  var content = await page.content(); //6获取页面
//   console.log(content)
  var $ = cheerio.load(content,{decodeEntities:false});
// var title = $(".song_name").find("a").html();
// console.log(title)
var itmes = $(".song_item")
var arr = [];
itmes.each((index,value)=>{
    var imgUrl =$(value).find(".song_rank img").attr("src");
    var title =$(value).find(".song_name a").html();
    var artist =$(value).find(".song_artist span").html();
    arr.push({
        imgUrl,
        title,
        artist
    })
})
// console.log(arr)
  // await page.screenshot({path: 'example.png'});//7截图函数

  await browser.close();    //8关闭浏览器实例
// })();
  return arr;
}
module.exports =show;