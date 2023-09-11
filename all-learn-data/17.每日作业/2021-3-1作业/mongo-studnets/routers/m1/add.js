const Router = require('koa-router')
const router = new Router()
// 查询数据库
router.get('/m1/add', async ctx => {
    // var { id } = ctx.query;
    // if (id) {

    // } else {

    // }
    await ctx.render('add')
})
module.exports = router