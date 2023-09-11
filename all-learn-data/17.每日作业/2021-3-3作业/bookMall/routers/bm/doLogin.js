const router = require('koa-router')()
const usersModel = require('../../models/users')
router.post('/bm/doLogin', async ctx => {
    var { username, pwd } = ctx.request.body
    var res = await usersModel.find({ username, pwd: Number(pwd) })
    if (res.length) {
        ctx.cookies.set('login', true)
        ctx.redirect('/bm/index')
    } else {
        ctx.body = "<script>alert('用户名或密码错误');location.href='/bm/login'</script>"
    }
})
module.exports = router