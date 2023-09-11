const Router = require('koa-router')
const membersModel = require('../../models/members')
const router = new Router()
// 查询数据库
router.get('/m1/edit', async ctx => {
    var { id } = ctx.query;
    console.log(id)
    var data = await membersModel.findOne({ _id: id })
    await ctx.render('edit', { data: data })
})
module.exports = router