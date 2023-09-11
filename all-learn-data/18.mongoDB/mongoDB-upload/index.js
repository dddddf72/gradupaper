const initManage = require('./config/init')
const koa = require('koa')
const app = new koa()
initManage(app);
app.listen(8070)