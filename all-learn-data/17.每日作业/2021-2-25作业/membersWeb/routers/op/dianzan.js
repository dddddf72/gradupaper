const router = require('koa-router')()
const membersModel = require('../../models/membersWeb')
router.post('/dianzan', async ctx => {
    var { result } = ctx.request.body;
    // 取得前端获得提交的"id"&zan,以&分隔
    let str = result.split('&')
    // 第一段为id
    let id = str[0];
    // 使用正则取得符合Objectid规则的值
    let sid = id.replace(/[^0-9a-fA-F]/g, "");
    // 第二段为zan,点击则取反
    let like = str[1].replace(/[^a-zA-Z]/g, '')
    if (like == "false") {
        like = true;
    } else {
        like = false;
    }
    // 使用数据库更新操作
    await membersModel.updateOne({ _id: sid }, { $set: { zan: like } })
    // 更新完毕返回入口页面
    ctx.redirect('/index')
})

module.exports = router;