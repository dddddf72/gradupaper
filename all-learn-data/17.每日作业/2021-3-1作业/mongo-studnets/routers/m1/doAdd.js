const Router = require('koa-router')
const router = new Router()
const membersModel = require('../../models/members')
const upload = require('../../config/multer')
router.post('/m1/doAdd', upload.single('file'), async ctx => {
    console.log(ctx.req.body)
    console.log(ctx.req.file.filename)
    var { name, age, like, friend } = ctx.req.body
    var avatar = ctx.req.file.filename;
    var host = ctx.request.header.host;
    avatar = `http://${host}/${avatar}`
    var db = new membersModel({ name, age, like: Boolean(like), friend: Boolean(friend), avatar })
    db.save(err => {
        if (err) throw err;
    })
    ctx.redirect('/m1')
})
module.exports = router