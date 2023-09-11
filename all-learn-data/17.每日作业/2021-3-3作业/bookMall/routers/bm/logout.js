const router = require('koa-router')()
router.get('/bm/logout', async ctx => {
    ctx.cookies.set('login', '')
    ctx.redirect('/bm/login')
})
module.exports = router