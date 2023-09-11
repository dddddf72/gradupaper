const router = require("../routers/index.js")
const cors = require("koa2-cors");
async function initManage(a){
    a.use(cors());
    a.use(router.routes());
}
module.exports = initManage;