const koa = require("koa");
const app =  new koa();
/* 默认读取index.js文件*/
const initManage = require("./initConfig");
initManage(app);
app.listen(8080)