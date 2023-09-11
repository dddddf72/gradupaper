var evaluate = async ctx=>{
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
  /* 2.新建一个页面 */
  const page = await browser.newPage();
  /* 3.到达某个页面 */
  var {id} = ctx.request.query;
  console.log(id);
  await page.goto(`https://www.duitang.com/p/atlas/?id=${id}`);
  /* 4.在页面停顿3s */
  await page.waitForTimeout(1000)
  /* 5.evaluate可以获取页面内容 */
  var res = await page.evaluate(()=>{
    var $ = window.jQuery;
    var items = $("ul .cmt");
    var arr = [];
    items.each((index,value)=>{
        let avatar = $(value).find(".sender-avatar img").attr("src");
        let username = $(value).find(".cmt-r-name").html();
        let time = $(value).find(".cmt-r-time").html();
        let eval_text = $(value).find(".cmt-maincont").html();
        arr.push({
            avatar,
            username,
            time,
            eval_text
        })
    })
    return arr;
  })

  await browser.close();
  console.log(res);
  ctx.body = res;
}
module.exports = evaluate;