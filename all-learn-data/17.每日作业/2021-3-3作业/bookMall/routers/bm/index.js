const router = require("koa-router")()
const booksModel = require("../../models/books");
// 查询数据库
router.get("/bm/index", async ctx => {
    var data = await booksModel.find({});
    console.log(ctx.request.url)
    await ctx.render("index", { arr: data });
})
module.exports = router;