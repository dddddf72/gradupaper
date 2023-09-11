const Router = require('koa-router')
const membersModel = require('../../models/members')
const router = new Router()
// 查询数据库
router.get('/m1', async ctx => {
    var data = await membersModel.find({})
    await ctx.render('index', { arr: data })


})
module.exports = router