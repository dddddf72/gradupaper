const cors = require('koa2-cors')
const render = require('koa-art-template')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const static = require('koa-static')
const reqdirec = require('require-directory')
function initManage(app) {
    render(app, {
        root: `${process.cwd()}/views`,
        extname: '.html',
        debug: process.env.NODE_ENV != 'prduction'
    })
    app.use(cors())
    app.use(bodyParser())
    app.use(static(`${process.cwd()}/assets`))
    app.use(static(`${process.cwd()}/static`))
    reqdirec(module, `${process.cwd()}/routers`, { visit: loadRouters })
    function loadRouters(obj) {
        if (obj instanceof Router) {
            app.use(obj.routes());
        }
    }
}
module.exports = initManage;