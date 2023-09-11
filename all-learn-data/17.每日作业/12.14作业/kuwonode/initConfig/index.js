const bodyParser = require("koa-bodyparser");
const router = require("../routers/index")
function initManage(app){
    app.use(bodyParser());
    app.use(router.routes())
}
module.exports =initManage