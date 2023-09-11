const Router = require("koa-router");
const router = new Router();
const booksModel = require("../../models/books");
// 查询数据库
router.get("/bm/edit", async ctx => {
    var { id } = ctx.query;
    var data = await booksModel.findOne({ _id: id });
    await ctx.render("edit", { data: data })
})
module.exports = router;