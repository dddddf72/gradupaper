const koa = require("koa")
const app = new koa();
const router = require("koa-router")();
const render = require("koa-art-template")
const path = require("path")
const axios = require("axios")
const bodyParser = require("koa-bodyparser");
render(app,{
    root:path.join(__dirname,"pages"),
    extname:".html"   //.art为art-template模板引擎
})
//中间件 
// cookie，保存数据的一种方式，一般是保存在客户端浏览器
// 作用：在同一个浏览器中访问同一个域名时，共享数据

router.get("/",async ctx=>{
    var html = await axios.get("http://192.168.4.18:8000/")
    // console.log(html.data.result)
    // ctx.body = "index"
    // var arr = ["html","css","js"]
    await ctx.render("index",{arr:html.data.result})
})
router.get("/login",async ctx=>{
    // ctx.cookies.set("username","cheng",{
    //     maxAge:1000*60*60, //设置cookie的时长
    //     // expires:"2020-12-24",
    //     httpOnly:false   //设置cookie是否可以在客户端读取 false可以读取，true不能读取
    // })
    await ctx.render("login")
})
router.get("/music",async ctx=>{
    await ctx.render("music")
})
router.get("/friend",async ctx=>{
    await ctx.render("friend")
})
router.post("/doLogin",async ctx=>{
    console.log(ctx.request.body)  
    var {username,pwd} = ctx.request.body;
    var data = {username:"cheng",pwd:12345}
    if(data.username==username && data.pwd == pwd){
        // 登录成功设置cookie
        ctx.cookies.set("name","login",{
            httpOnly:false
        })
        await ctx.redirect("/")
    }else{
        ctx.body = (`<script>alert("登录失败,用户名/密码错误");location.href="/login"</script>`)
    }
})
app.use(async (ctx,next)=>{
// 1.在登录页
if(ctx.path=="/login"||ctx.path == "/doLogin"){
    await next();
}else{
    if(ctx.cookies.get("name")){
        await next();
    }else{
        await ctx.redirect("/login")
    }
}
// 2.不在登录页)(1.已经登录，2.未登录)

})
app.use(bodyParser());
app.use(router.routes());
app.listen(8081)