const router = require('koa-router')()
membersModel = require('../../models/membersWeb')
router.post('/doDelete', async ctx => {
    let { id } = ctx.request.body;
    let sid = id.replace(/[^0-9a-fA-F]/g, "");
    await membersModel.remove({ _id: sid })
    ctx.redirect('/index')
})
module.exports = router;