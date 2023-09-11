// json数据页面(限制limit)
const router = require('koa-router')()
router.get('/api/look', async ctx => {
    var { offset, limit } = ctx.query;
    if (offset == undefined) {
        offset = 0
    }
    if (limit == undefined) {
        limit = 5
    }
    var data = await membersModel.find({}).skip(Number(offset)).limit(Number(limit))
    ctx.body = {
        data,
        code: 200
    }
})
module.exports = router;