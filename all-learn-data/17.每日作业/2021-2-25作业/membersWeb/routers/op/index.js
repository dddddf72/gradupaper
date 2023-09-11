const router = require('koa-router')()
const membersModel = require('../../models/membersWeb')
router.get('/index', async ctx => {
    let arr = await membersModel.find({})
    await ctx.render('index', { arr })
})
module.exports = router;