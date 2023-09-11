const koa = require("koa");
const router = require("koa-router")();
const app = new koa();
/* 同级目录 ./ */
const show = require("./server.js");
router.get("/",async ctx=>{
    let data  = await show();
    ctx.body = data;
})
app.use(router.routes());
app.listen(8000)