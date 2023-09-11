const router = require('koa-router')()
router.get('/bm/login', async ctx => {
    if (ctx.cookies.get('login')) {
        ctx.redirect('/bm/index')
    }
    else {
        await ctx.render('login')
    }

})
module.exports = router