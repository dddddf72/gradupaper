const koa =require("koa");
const app=new koa();

//3.返回数据给前端
app.use(async ctx=>{
    const data=await require("./server")();
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.body={
        code:200,
        result:data,
        total:data.length
    }
})
app.listen(4000);