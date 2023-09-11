const router = require("../routers/index")
const cors = require("koa2-cors");
async function initManage(app){
    app.use(cors());
    app.use(router.routes())
}
module.exports = initManage;