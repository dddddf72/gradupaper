const router = require("koa-router")();
const userModel = require("../../models/user");
router.get("/api/user", async ctx => {
    var data = await userModel.find({});
    console.log(data);
    ctx.body = {
        code: 200,
        res: data[0],
        msg: "个人中心"
    }
})
module.exports = router;