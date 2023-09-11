const cors = require("koa2-cors");
const render = require('koa-art-template');
const bodyparser = require("koa-bodyparser");
const router = require("../routers/index");
const static = require("koa-static");
function initManage(app) {
    app.use(bodyparser());
    app.use(cors());
    render(app, {
        root: `${process.cwd()}/views`,
        extname: '.html', //后缀也可以写成.art
        debug: process.env.NODE_ENV !== 'production'
    });
    app.use(static(`${process.cwd()}/static`));
    app.use(router.routes());

}
module.exports = initManage;