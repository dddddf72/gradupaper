
const koa = require("koa")
const Router = require("koa-router")();
const app = new koa();
Router.get("/",async ctx=>{
    ctx.body="get/post"
})
Router.get("/get",async ctx=>{
    ctx.body="get请求"
})
Router.post("/post",async ctx=>{
    ctx.body="post请求"
})
app.use(Router.routes())
app.listen(80)
