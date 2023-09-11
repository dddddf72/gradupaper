const Router = require('koa-router')
const router = new Router()
const membersModel = require('../../models/members')
// 查询数据库
router.get('/m1/doDelete', async ctx => {
    var { id } = ctx.query;
    await membersModel.deleteOne({ _id: id })
    ctx.redirect('/m1')
})
module.exports = router