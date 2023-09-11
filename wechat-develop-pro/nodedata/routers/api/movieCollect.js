const router = require('koa-router')()
const MovieModel = require('../../models/movie')
const userModel = require('../../models/user')
router.post('/api/collectMovie/:m', async ctx => {
    var { m } = ctx.request.params
    var { id, collected } = ctx.request.body
    try {
        var data = await MovieModel(m).updateOne({ _id: id }, { $set: { collected } })
        console.log(data)
        if (data.nModified == 0) {
            throw new Error(`${m}传值不合法`)
        } else {
            // 添加收藏数据到user
            var item = await MovieModel(m).find({ _id: id })
            console.log(item)
            if (collected) {
                await userModel.updateOne({}, { $push: { collects: item[0] } });
                ctx.body = {
                    code: 200,
                    msg: '收藏成功'
                }
            } else {
                await userModel.updateOne({}, { $pull: { collects: { _id: id } } })
                ctx.body = {
                    code: 200,
                    msg: '取消收藏成功'
                }
            }
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            msg: '参数无效'
            // request: `post /api/collectMovie/${m}`
        }
    }
})
module.exports = router