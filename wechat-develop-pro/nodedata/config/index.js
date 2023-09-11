const requiredir = require('require-directory')
const Router = require('koa-router')
const static = require('koa-static')
const body = require('koa-body')
const cors = require('koa2-cors')
function initManage(app) {
    // 1.跨域请求
    app.use(cors())
    // 2.解析post请求，及图片上传
    app.use(body({ multipart: true, formidable: { maxFileSize: 200 * 1024 * 1024, keepExtensions: true } }))
    // 3.路由自动加载
    requiredir(module, `${process.cwd()}/routers`, { visit: loadRouter })
    function loadRouter(obj) {
        if (obj instanceof Router) {
            app.use(obj.routes())
        }
    }
    // 4.静态资源
    app.use(static(`${process.cwd()}/images`))
    app.use(static(`${process.cwd()}/assets`))
}
module.exports = initManage;