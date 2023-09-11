const koa = require("koa");
const app =  new koa;
const router  =  require("koa-router")();
const cors = require("koa2-cors");
app.use(cors());
router.get("/",async ctx=>{
    ctx.body ={
        name:"html",
        age:13,
        code:200
    }
})
app.use(router.routes());
app.listen(8000)