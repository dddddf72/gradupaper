const koa = require("koa");
const app = new koa();
const router = require("koa-router")();
router.get("/", async ctx => {
    ctx.body = "get/post"

})
router.get("/get", async ctx => {
    ctx.body = "get请求"
})
router.post("/post", async ctx => {
    ctx.body = "post请求"
})
/* 服务器默认端口是80端口 */
app.use(router.routes());
app.listen(80)