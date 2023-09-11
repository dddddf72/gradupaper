const Router = require('koa-router')
const router = new Router()
// 查询数据库
// router.get('/', async ctx => {
//     ctx.redirect('/login')
// })
router.get('/m1/logout', async ctx => {
    ctx.cookies.set('login', '')
    ctx.redirect('/login')
})
module.exports = router