const bodyParser = require("koa-bodyparser");
const router = require("../routers/index")
async function initManage(app){
    app.use(router.routes());
    app.use(bodyParser());
}
module.exports = initManage;