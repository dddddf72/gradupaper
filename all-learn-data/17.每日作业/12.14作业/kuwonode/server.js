const koa = require("koa");
const app = new koa();
const router = require("koa-router")();
const show = require("./index.js") ;  //./为当前路径
router.get("/",async ctx=>{
      let data = await show();
      ctx.body =data;
})
app.use(router.routes());
app.listen(8000)