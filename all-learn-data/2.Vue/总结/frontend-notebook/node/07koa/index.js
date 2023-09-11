const koa = require("koa");
const app = new koa();
const router = require("koa-router")();
const  render = require("koa-art-template");
const path = require("path");
const axios = require("axios");
const bodyParser = require("koa-bodyparser");
render(app,{
    /* __dirname当前文件所在文件夹 */
    root:path.join(__dirname,"pages"),
    extname:".html"
})

/* 中间件 */
/* cookies  保存数据的一种方式,一般是保存在浏览器客户端。
作用:可以让我们在同一个浏览器中访问同一个域名时候共享数据。

 */

router.get("/",async ctx=>{
    var html = await axios.get("http://192.168.4.18:8000/");
    await ctx.render("index",{arr:html.data.result})
})
router.get("/login",async ctx=>{
    await ctx.render("login.html")
})
router.get("/music",async ctx=>{
    await ctx.render("music.html")
})
router.get("/friend",async ctx=>{
    await ctx.render("friend.html")
})
router.post("/doLogin",async ctx=>{
    console.log(ctx.request.body)
    var {username,pwd} = ctx.request.body;
    /* data是从数据库中取得的数据 */
    var data = {username:"cheng",pwd:123456}
    if(data.username == username && data.pwd == pwd){
        /* 用cookies记录登陆成功 */
        ctx.cookies.set("name","login",{
            httpOnly:true  //设置cookie在浏览器是否可读,默认是false  
        })
        await ctx.redirect("/")
    }else{
        ctx.body = (`<script>alert("登陆失败用户名或密码错误");location.href="/login"</script>`)
    }
    
})
/*  */
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
app.use(bodyParser());
app.use(router.routes())
app.listen(8081)