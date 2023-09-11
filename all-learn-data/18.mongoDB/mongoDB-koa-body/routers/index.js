const Router = require("koa-router");
const router = new Router();
const membersModel = require("../models/members");
// 查询数据库
router.get("/index", async ctx => {
    var data = await membersModel.find({});
    await ctx.render("index", { arr: data });
})
module.exports = router;