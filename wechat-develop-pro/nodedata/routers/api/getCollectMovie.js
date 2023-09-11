const router = require("koa-router")();
const userModel = require("../../models/user");
router.get("/api/getCollect", async ctx => {
    var data = await userModel.find({}, { collects: 1 });
    console.log(data[0].collects);
    ctx.body = {
        code: 200,
        res: data[0].collects,
        msg: "获取收藏的电影"
    }
})
module.exports = router;