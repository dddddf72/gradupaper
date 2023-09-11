const router = require('koa-router')()
const articlesModel = require('../../models/articles')
router.get('/api/article', async ctx => {
    var data = await articlesModel.find({}).sort({ _id: -1 })
    ctx.body = {
        code: 200,
        result: data
    }
})
module.exports = router;