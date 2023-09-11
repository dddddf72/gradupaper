const router = require('koa-router')()
const articlesModel = require('../../models/articles')
router.post('/api/doCollect', async ctx => {
    var { id, collected } = ctx.request.body;
    console.log(id, collected)
    try {
        await articlesModel.updateOne({ _id: id }, { $set: { collected } })
        ctx.body = {
            code: 200,
            msg: "收藏成功",
            request: 'post /api/doCollect'
        }
    }
    catch (err) {
        ctx.body = {
            code: 400,
            msg: '参数无效',
            request: 'post /api/doCollect'
        }
    }
})


module.exports = router;