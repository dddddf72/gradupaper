const koa = require("koa");
const app =  new koa();
const router = require("koa-router")();
const cors = require("koa2-cors");
// const music = require("./controllers")
router.get("/music",async ctx=>{
    // var data = await music();
    ctx.body = {
        code:200,
        msg:"首页的数据",
        result:require("./data/music")
    }
})
router.get("/detail",async ctx=>{
    var {id} = ctx.request.query;
    var url = `https://music.163.com/#/playlist?id=${id}`
    ctx.body ="detail"
})
router.get("/search",async ctx=>{
    var {keyword} = ctx.request.query;
    var url = `https://music.163.com/#/search/m/?id=2434408895&s=${keyword}&type=10`
    ctx.body ="search"
})
app.use(cors())
app.use(router.routes());
app.listen(8080);