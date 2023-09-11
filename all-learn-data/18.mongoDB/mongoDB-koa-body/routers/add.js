const router = require("koa-router")();
// 查询数据库
router.get("/add", async ctx => {
    await ctx.render("add")
})
module.exports = router;