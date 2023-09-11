const router = require('koa-router')()
const membersModel = require('../../models/membersWeb')
const upload = require('../../config/multer')
router.post('/doAdd', upload.single('file'), async (ctx, next) => {
    var { name, age, like } = ctx.req.body
    var zan = false;
    if (ctx.req.file == undefined) {
        let db = new membersModel({ name, age, like, zan })
        db.save(err => {
            if (err) throw err;
        })
    } else {
        var imageUrl = ctx.req.file.filename;
        var host = ctx.request.header.host;
        imageUrl = `http://${host}/${imageUrl}`;
        let db = await membersModel({ name, age, like, zan, imageUrl })
        db.save(err => { if (err) throw err; })
    }
    ctx.redirect('/index')
})
module.exports = router;