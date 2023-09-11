```js
cnpm i //可以将package.json中的依赖,一键导入
```

```
.gitignore  //不需要上传到git的文件写在这个文件夹中
```

```
releases  //上线的可以在生产环境中使用的版本
beta //测试版本
```

## 模板

```
ejs jade art-tempate
```

## 1 art-template

> art和html页面的语法基本一样

```js
//1.安装依赖
cnpm i art-template -S
cnpm i koa-art-template -S
```

```js
//2.配置
const  render = require("koa-art-template");
const path = require("path");
render(app,{
    /* __dirname当前文件所在文件夹 */
    root:path.join(__dirname,"pages"),
    extname:".html"
})
router.get("/",async ctx=>{
    await ctx.render("index.html")
})
```

### 1-1 each

```js
{{each arr}}
    <div>{{$value}}{{$index}}</div>
{{/each}}
```

### 1-2 extend

> 可以使用一个通用的模块

```js
//nav.html  定义一个公用的导航模块
//index.html  可以在index中使用extend关键字将其获取
{{extend 'nav.html'}}
```

### 1-3 block插槽

> 作用:可以将模板中是不通用的部分定义在插槽中,不同的页面在插槽中写不同的内容。

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{block 'title'}} {{/block}}</title>

</head>
<body>
    {{include './nav.html'}}
    <!-- 插槽 -->
    {{block "content"}}

    {{/block}}
</body>

</html>
```



### 1-4 include  

> 可以获取子模板

```js
{{include './nav.html'}}
```





## 2 状态码

```
404 没有找到
403 禁止访问
```

## 3 Cookies

```
定义:是保存数据的一种方式,一般是存储在客户端浏览器中。
可以让我们在浏览器中访问同一个域名的时候共享数据。
作用:
1.保存用户信息
2.保存浏览器历史记录
3.做一定时长的免登陆
4.可以实现多个页面之间的数据共享
5.实现购物车的功能
```

### cookie的一些参数

```js
ctx.cookies.set("name","cheng",{
        maxAge:1000*60, //设置cookies的时长
        httpOnly:false  //设置cookie是否可以在客户端读取false可以读取,true不能读取
})
```

```js
//客户端读取cookie 控制台中
document.cookie
```



## 4 登陆权限的判断

```js
1-1 登陆页的html页面
//login.html
<form action="/doLogin" method="post">
        <!-- name属性:可以将前台的数据提交到后台 -->
        用户名: <input type="text" name="username" placeholder="请输入用户名">
        密码:  <input type="password" name="pwd" placeholder="请输入密码">
        <input type="submit">
</form>
```

```js
1-2 登陆页对应的路由
router.get("/login",async ctx=>{
    await ctx.render("login.html")
})
```

```js
1-3 提交数据的路由页面
router.post("/doLogin",async ctx=>{
    console.log(ctx.request.body)
    var {username,pwd} = ctx.request.body;
    /* data是从数据库中取得的数据 */
    var data = {username:"cheng",pwd:123456}
    if(data.username == username && data.pwd == pwd){
        await ctx.redirect("/")
    }else{
        ctx.body = (`<script>alert("登陆失败用户名或密码错误");location.href="/login"</script>`)
    }
    
})
```

```js
1-4 登陆拦截中间件
app.use(async (ctx,next)=>{
    // ctx.path可以获取路由地址
    /* 1.登陆页 */
    if(ctx.path == "/login" || ctx.path == "/doLogin"){
        await next();
    }else{
        /* 不在登陆页 */
        if(ctx.cookies.get("name")){
            /* 已经登陆了 */
            await next();
        }else{
            /* 没有登陆 */
            await ctx.redirect("/login")
        }
    }
    
})
```

