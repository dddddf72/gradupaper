## 1 模块化



> 如何在另一个js文件中使用其他js文件的变量或function,在客户端是不支持的。

### 1-1

导出

```js
//a.js
var a = 10;
function show(){
    console.log("show")
}
module.exports = {
    a,
    show
}
```

导入

```js
//b.js
const obj = require("./a.js");
console.log(obj)
```

> Tips:一个文件中只能有一个module.exports

```
module.exports == exports
```

### 1-2  exports导出 不推荐

> Tips:不支持字面量的形式

```js
 var a = 10;
function show(){
    console.log("show")
}
/* exports */
console.log(module.exports == exports)
/* 不推荐 */
exports.a = a;
exports.show = show;
```

## 2 post传值

```
# 安装依赖
cnpm i koa-bodyparser -S
```

```js
const koa = require("koa");
const app =  new koa();
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");#  导入
router.post("/post",async ctx=>{
    console.log(ctx.request.body) #  解析
    ctx.body = "登录成功"
})
app.use(bodyParser()); # 使用中间件
app.use(router.routes());
app.listen(8080)
```

## 3 puppeteer 

### 3-1  找到某个元素

```js
var ele = await page.$("#btn");
//input进行输入
await ele.type("hello world")
```

### 3-2 点击事件

```js
await ele.click()
```

### 3-3 解析元素的内容

```js
var content =  await page.$eval(selector,ele=>ele.value);

```

### 3-4 自动登录 --码云为例

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless:false,
      defaultViewport:null
  });
  const page = await browser.newPage();
  await page.goto('https://gitee.com/login');
  var username = await page.$("#user_login");
  await username.type("18986115180")
  var pwd  = await page.$("#user_password")
  await pwd.type("xxx")
  var submit  = await page.$(".submit");
  await submit.click()
  await page.waitForTimeout(3000)
})();
```

## 4 堆糖

```js
# ui https://www.duitang.com/
/list
[{
    avatar:"xxx",
    username:"xxx",
    label:"可爱头像",
    images:[
        {url:"xxx"},
        {url:"xxxx"}
    ],
    like:551,
    star:200,
    id:10001
}]
```

```js
# ui https://www.duitang.com/p/atlas/?id=123692817
/evaluate/:id
[{
    avatar:"xxx",
    username:"xxx",
    time:"xxx",
    eval_text:"xxx"
}]
```

```js
# ui https://www.duitang.com/search/?kw=%E4%BD%A0&type=feed
/search?kw=你
[
    {
        imageUrl:xxx,
        title:xxx,
        like:xxx,
        star:xxx,
        user:{
            avatar:xxx,
            name:xxx,
            label:xxx
        },
        id     
    }
]
```

## 5设计项目结构

```
路由
配置
MVC
model  --http
view
controller --路由控制层
```

