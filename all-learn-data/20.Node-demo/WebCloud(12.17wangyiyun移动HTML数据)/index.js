const koa = require("koa")
const app = new koa();
const initManage = require("./initConfig/index")
initManage(app)
app.listen(7000)