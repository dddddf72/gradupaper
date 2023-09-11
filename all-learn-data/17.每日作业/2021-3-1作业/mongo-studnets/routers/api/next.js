const Router = require('koa-router')
const router = new Router()
const membersModel = require('../../models/members')
// 查询数据库
router.post('/api/next', async ctx => {
    var { id } = ctx.request.body;
    var data = await membersModel.find({})
    var index = data.findIndex(item => item._id == id)
    if (index == -1) {
        ctx.body = { code: 400, msg: '参数无效', request: 'post /api/next' }
    } else {
        var obj = data[index + 1];
        ctx.body = {
            code: 200,
            res: obj,
            msg: '下一条数据'
        }
    }

})
module.exports = router