const Router = require("koa-router");
const router = new Router();
const membersModel = require("../models/members");
// 查询数据库
router.get("/edit", async ctx => {
    var { id } = ctx.query;
    var data = await membersModel.findOne({ _id: id });
    await ctx.render("edit", { data: data })
})
module.exports = router;