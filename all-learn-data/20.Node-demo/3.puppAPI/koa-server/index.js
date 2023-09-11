const koa = require("koa");
const app = new koa;
const router = require("koa-router")();
const cors = require("koa2-cors");
app.use(cors({
    origin: "*"
}));
router.get("/top250", async ctx => {
    ctx.body = require("./data/top250")
})
router.get("/in_theaters", async ctx => {
    ctx.body = require("./data/inTheaters")
})
router.get("/coming_soon", async ctx => {
    ctx.body = require("./data/comingSoon")
})
router.get("/ad", async ctx => {
    ctx.body = require("./data/ad.js")
})
router.get("/book", async ctx => {
    ctx.body = require("./data/book.js")
})
router.get("/more", async ctx => {
    var { limit, offset } = ctx.request.query;
    if (!limit) {
        limit = 30
    }
    if (!offset) {
        offset = 0
    }
    let result = require("./data/more.js")
    ctx.body = result.slice(offset, limit);
})
router.get("http/top250", async ctx => {
    let start = ctx.query.start;
    const data = await require("./network-http/top250.js")(start);
    // 3.返回数据给前台
    ctx.body = {
        code: 200,
        result: data,
        total: data.length
    }
})
router.get("/subject/:id", require("./network-http/subject"))
router.get("/cart", async ctx => {
    ctx.body = require("./data/cart")
})
router.get("/city", async ctx => {
    ctx.body = require("./data/city")
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(8000)