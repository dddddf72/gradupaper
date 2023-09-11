const router = require('koa-router')()
router.get('/add', async ctx => {
    await ctx.render('add')
})
module.exports = router