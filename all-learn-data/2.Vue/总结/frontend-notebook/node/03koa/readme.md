启动服务

### 1-1 初始化仓库

```
cnpm init -y  //生成package.json文件
```
```
{
    "scripts":{
        "start":"nodemon index.js"
    }
}
```



### 1-2 安装依赖

```
cnpm i koa koa-router -S
```

### 1-3 启动服务

```
const koa = require("koa");
const app = new koa();
const router = require("koa-router")();
router.get("/",async ctx=>{
    ctx.body="get/post"
})
/* 服务器默认端口是80端口 */
app.use(router.routes());
app.listen(80)
```

### get/post方式之间的区别

```
可见性:
1.get提交的字段在url地址中是可见的,post对用户来说是不可见的
安全性:
2.post更安全
传输的数据量大小
3.get传输数据有大小的限制,post理论上没有限制
```

get请求方式

#### 1-1 get传值

```
https://movie.douban.com/top250?start=50
```

```
ctx.request.query
```

#### 1-2 动态路由

```
https://movie.douban.com/subject/1295644/
```

```js
router.get("/subject/:id",ctx=>{
    console.log(ctx.request.params)
    ctx.body = "detail"
})
```

```
ctx.request.params //后台可以获取动态路由的数据
```

