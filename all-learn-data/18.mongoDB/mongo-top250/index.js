const koa = require('koa')
const cors = require('koa2-cors')
const router = require('koa-router')()
const Top250Model = require('./models/top250')
// const usersModel = require('./models/user')
const bodyParser = require('koa-bodyparser')
const collectsModel = require('./models/collects')
// 操作
const app = new koa();
// top250路由去读取数据库中的数据给前端使用
router.get('/top250', async ctx => {
    var { start, count } = ctx.query

    if (start == undefined) {
        start = 0
    }
    if (count == undefined) {
        count = 5
    }
    var data = await Top250Model.find({}, { title: 1, raiting: 1, zan: 1 }).skip(Number(start)).limit(Number(count));

    ctx.body = {
        data,
        code: 200
    }
})
// 增加
router.post('/doAdd', async ctx => {
    console.log(ctx.request.body)
    var { title, raiting } = ctx.request.body;
    var db = new Top250Model({ title, raiting, zan: false })
    db.save(err => {
        if (err) throw err;
    })
    ctx.redirect('/top250')
})
// 删除
router.post('/doDelete', async ctx => {
    console.log(ctx.request.body)
    var { id } = ctx.request.body
    await Top250Model.remove({ _id: id })
})
// dianzan
router.post('/dianzan', async ctx => {
    var { id, zan2 } = ctx.request.body
    await Top250Model.updateOne({ _id: id }, { $set: { zan: zan2 } })
})
// router.post('/doCollect', async ctx => {
//     var { id, zan2 } = ctx.request.body;
//     var data1 = await Top250Model.find({ _id: id }, { title: 1, raiting: 1 })
//     var obj = data1[0]
//     if (zan2 == 'true') {
//         // push
//         await usersModel.updateOne({ name: 'sst' }, { $push: { collects: obj } })
//     } else if (zan2 == 'false') {
//         // delete
//         await usersModel.updateOne({ name: 'sst' }, { $pull: { collects: obj } })
//     }
// })
router.post('/doCollect', async ctx => {
    var { id, zan2 } = ctx.request.body
    var data1 = await Top250Model.find({ _id: id }, { title: 1, raiting: 1 })
    var obj = data1[0]
    if (zan2 == 'true') {
        await collectsModel.updateOne({ name: 'sst' }, { $push: { collects: obj } })
    } else {
        await collectsModel.updateOne({ name: 'sst' }, { $pull: { collects: obj } })
    }
})

app.use(cors())
app.use(bodyParser());
app.use(router.routes());

app.listen(9090)
