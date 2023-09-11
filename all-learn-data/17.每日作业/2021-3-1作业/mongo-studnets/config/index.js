const Router = require('koa-router')
const reqdirec = require('require-directory')
const render = require('koa-art-template')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const cors = require('koa2-cors')

function initManage(app) {
    app.use(cors());
    app.use(bodyparser());
    reqdirec(module, `${process.cwd()}/routers`, { visit: loadRouters })
    render(app, {
        root: `${process.cwd()}/views`,
        extname: '.html',
        debug: process.env.NODE_ENV !== 'production'
    });
    function loadRouters(obj) {
        if (obj instanceof Router) {
            app.use(obj.routes());
        }
    }
    app.use(static(`${process.cwd()}/assets`));
    app.use(static(`${process.cwd()}/static`));
}
module.exports = initManage;