const router = require('koa-router')()
const MovieModel = require('../../models/movie');
const userModel = require('../../models/user');
router.get('/api/history', async ctx => {
    var { id, m } = ctx.query;
    console.log(id, m)
    try {
        var data = await MovieModel(m).find({ _id: id })
        var item = data[0]
        // 判断History中是否有这条数据
        var isCollect = await userModel.find({ "history._id": id })
        console.log(isCollect)
        if (isCollect.length == 0) {
            await userModel.updateOne({ $push: { history: item } })
            ctx.body = {
                code: 200,
                msg: '已添加到历史记录'
            }
        } else {
            ctx.body = {
                code: 200,
                msg: '历史记录中已存在'
            }
        }
    }
    catch (err) {
        console.log(err)
        ctx.body = {
            code: 400,
            msg: '输入的参数不合法'
        }
    }

})
module.exports = router