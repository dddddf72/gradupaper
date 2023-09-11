/* 1.导入koa */
const  koa =  require("koa");
/* 2.新建一个应用 */
const app = new koa();
app.use(async (ctx,next)=>{
    console.log(1);
    await next();
    console.log(2);
})
app.use(async (ctx,next)=>{
    console.log(3);
})
console.log(4)
app.listen(8081)