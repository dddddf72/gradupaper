const Router = require('koa-router')
const router = new Router()
// 查询数据库
// router.get('/', async ctx => {
//     ctx.redirect('/login')
// })
router.get('/login', async ctx => {
    if (ctx.cookies.get('login')) {
        ctx.redirect('/m1')
    }
    else {
        await ctx.render('login')
    }

})
module.exports = router