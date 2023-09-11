const router = require('koa-router')()
const membersModel = require('../../models/membersWeb')
router.get('/change', async ctx => {
    var { id } = ctx.query;
    id = id.replace(/[^0-9a-fA-F]/g, "")
    if (id) {
        var arr = await membersModel.find({ _id: id })
    }
    await ctx.render('change', { arr })
})
module.exports = router;