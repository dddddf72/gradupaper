const Router = require('koa-router')
const router = new Router()
const membersModel = require('../../models/members')
// 查询数据库
router.post('/api/delete', async ctx => {
    var { id } = ctx.request.body;
    try {
        var res = await membersModel.deleteOne({ _id: id })
        console.log(res)
        ctx.body = { code: 200, msg: '删除成功' }
    } catch (err) {
        console.log('err')
        ctx.body = {
            code: 400, msg: '请求的参数错误', request: 'post /api/delete'
        }
    }

    // 1.正确的id值 res --> null
    // 2.不合法的id  res-->{}

})
module.exports = router