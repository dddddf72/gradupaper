const router = require("koa-router")();
const membersModel = require('../models/members')
const path = require('path')
const fileUpload = require('../utils/upload')
router.post('/doAdd', async ctx => {
    console.log(ctx.request.body)
    console.log(ctx.request.files)
    var { name, age, like, friend } = ctx.request.body
    var file = ctx.request.files.file
    var uploadName = path.basename(file.path);
    var isUpload = Boolean(file.name.trim())
    if (isUpload) {
        fileUpload(file.path, uploadName);
        var avatar = ctx.origin + '/' + uploadName;
        console.log(avatar)
        var db = new membersModel({ name, age, like: Boolean(like), friend: Boolean(friend), avatar })
        db.save(err => {
            if (err) throw err;
        })
    } else {
        var db = new membersModel({ name, age, like: Boolean(like), friend: Boolean(friend) })
        db.save(err => {
            if (err) throw err;
        })
    }
    ctx.redirect('/index')

})
module.exports = router;