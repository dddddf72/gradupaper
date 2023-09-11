const koa = require('koa')
const router = require('koa-router')()
const cors = require('koa2-cors')
const MybaseModel = require('./models/mybase')
const app = new koa()
router.get('/', async ctx => {

    var data = await MybaseModel.find({})
    ctx.body = {
        code: 200,
        res: data
    }
})
app.use(cors())
app.use(router.routes())
app.listen(5051)