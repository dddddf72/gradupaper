const router = require('koa-router')()
const articlesModel = require('../../models/articles');
router.get('/api/articleDetail', async ctx => {
    var { id } = ctx.query;
    var res = await articlesModel.find({ _id: id })
    ctx.body = {
        code: 200,
        res,
        msg: '文章详情'
    }
})
module.exports = router