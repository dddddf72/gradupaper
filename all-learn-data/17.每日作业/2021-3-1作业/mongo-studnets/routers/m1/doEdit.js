const Router = require('koa-router')
const router = new Router()
const membersModel = require('../../models/members')
const upload = require('../../config/multer')
router.post('/m1/doEdit', upload.single('file'), async ctx => {
    var { id, name, age, like, friend } = ctx.req.body
    var avatar = ctx.req.file.filename;
    var host = ctx.request.header.host;
    avatar = `http://${host}/${avatar}`
    await membersModel.updateOne({ _id: id }, { name, age: Number(age), like: Boolean(like), friend: Boolean(friend), avatar })
    ctx.redirect('/m1')
})
module.exports = router