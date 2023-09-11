const Koa = require('koa')
const app = new Koa()
const initManage = require('./config')
app.use(async (ctx, next) => {
    var url = ctx.request.url;
    if (url == '/login' || url == '/m1/doLogin') {
        await next();
    } else {
        if (ctx.cookies.get('login')) {
            await next()
        } else {
            ctx.redirect('/login')
        }
    }
})
initManage(app)
app.listen(6060)
