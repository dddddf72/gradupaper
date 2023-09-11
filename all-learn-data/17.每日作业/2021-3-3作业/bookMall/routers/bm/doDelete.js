const router = require('koa-router')()
const booksModel = require('../../models/books')
router.get('/bm/doDelete', async ctx => {
    var { id } = ctx.query;
    await booksModel.deleteOne({ _id: id })
    ctx.redirect('/bm/index')
})
module.exports = router