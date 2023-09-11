## 网易云音乐

```
/banner
/hot
/new-cd
# ui https://music.163.com/#/playlist?id=2434408895
/detail
```

```
搜索页
# ui https://music.163.com/#/search/m/?id=2434408895&s=你&type=10
/search
```



```
/music
{
    banner:{},
    hot:{},
    newCd:{
        
    }
}
```

```
//1.抓到的数据实现一个移动页面的站
```

```
//2.用小程序,实现网易云首页--参考网易云app（自学）
```

## 1 如何读取iframe

```js
# 1-1找到iframe
var iframe = await page.waitForSelector("#id")
var iframe = await page.$("#id");
# 1-2获取iframe中的内容 contentFrame()
var frame = await iframe.contentFrame();
```



## 2 koa中如何实现跨域

https://www.npmjs.com/package/koa2-cors

```
cnpm i koa2-cors -S
```

```js
const cors = require("koa2-cors");
app.use(cors());
```

## 3 iframe阿里云验证

> 实现阿里云的滑块验证

```
# boundingBox() 可以获取元素位置,width-height相关的信息
# page.mouse.move()
# page.mouse.down();
# page.mouse.up();
```

```js
const url = "https://account.aliyun.com/register/register.html"
const puppeteer = require("puppeteer");
async function show(){
    const browser =await puppeteer.launch({
        headless:false,
        defaultViewport:null
    })
    const page = await browser.newPage();
    await page.goto(url)
    var iframe = await page.$("#alibaba-register-box");
    var frame = await iframe.contentFrame();

    var span = await frame.waitForSelector("#nc_1__scale_text");
    var position = await span.boundingBox();
    await page.mouse.move(position.x,position.y);
    await page.mouse.down();
    for(var i=0;i<position.width;i++){
        await page.mouse.move(position.x+i,position.y);
    }
    await page.mouse.up();
    console.log(position)
}
show()
```



## 作业

```
1.将网易云的数据请求到
2.使用小程序实现网易云首页 (参考官方文档)
   # 2-1 实现ui
   # 2-2 请求数据
   # 2-3 渲染数据
```

