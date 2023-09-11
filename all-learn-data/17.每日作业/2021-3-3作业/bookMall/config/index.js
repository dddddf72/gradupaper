const Router = require("koa-router");
const koaBody = require('koa-body');
const requireDirectory = require("require-directory");
const render = require('koa-art-template');
const static = require('koa-static');
const cors = require('koa2-cors')

function initManage(app) {
    app.use(cors());
    app.use(koaBody({
        // 支持文件格式
        multipart: true,
        formidable: {
            maxFileSize: 200 * 1024 * 1024, //20mb
            // 保留文件扩展名
            keepExtensions: true
        }
    }));
    /* 加载/routers/m1下的文件时,会触发loadRouters函数 */

    render(app, {
        root: `${process.cwd()}/views`,
        extname: '.html', //后缀也可以写成.art
        debug: process.env.NODE_ENV !== 'production'
    });
    requireDirectory(module, `${process.cwd()}/routers`, {
        visit: loadRouters
    })
    function loadRouters(obj) {
        if (obj instanceof Router) {
            app.use(obj.routes());
        }
    }
    app.use(static(`${process.cwd()}/assets`));
    app.use(static(`${process.cwd()}/static`));

}
module.exports = initManage;