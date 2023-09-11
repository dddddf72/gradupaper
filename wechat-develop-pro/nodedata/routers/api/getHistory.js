const router = require("koa-router")();
const userModel = require("../../models/user");
router.get("/api/getHistory", async ctx => {
    var data = await userModel.find({}, { history: 1 });
    console.log(data[0].history);
    ctx.body = {
        code: 200,
        res: data[0].history,
        msg: "获取历史记录的电影"
    }
})
module.exports = router;