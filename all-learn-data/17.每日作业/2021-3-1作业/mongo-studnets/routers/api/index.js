const Router = require('koa-router')
const router = new Router()
const membersModel = require('../../models/members')
// 查询数据库
router.get('/api/look', async ctx => {
    var data = await membersModel.find({})
    console.log(ctx.request.header.host)
    ctx.body = {
        code: 200,
        result: data,
        msg: "首页数据"
    }
})
module.exports = router