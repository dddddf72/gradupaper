const bodyparser  = require("koa-bodyparser");
const router = require("../routers/index.js")
function initManage(app){
    app.use(bodyparser());
    app.use(router.routes());
}
module.exports = initManage

