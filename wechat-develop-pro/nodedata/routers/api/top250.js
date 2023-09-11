const router = require('koa-router')()
const Top250Model = require('../../models/top250')
router.get('/api/top250', async ctx => {
    var data = await Top250Model.find()
    ctx.body = {
        code: 200,
        res: data,
        msg: 'top250'
    }
})

module.exports = router;