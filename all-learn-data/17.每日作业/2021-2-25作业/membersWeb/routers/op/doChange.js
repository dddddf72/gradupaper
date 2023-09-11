const router = require('koa-router')()
const membersModel = require('../../models/membersWeb')
const upload = require('../../config/multer')
router.post('/doChange', upload.single('file'), async (ctx, next) => {
    var { id, name, age, like } = ctx.req.body;
    if (ctx.req.file == undefined) {
        await membersModel.updateMany({ _id: id }, { $set: { name, age, like } })
    } else {
        var imageUrl = ctx.req.file.filename;
        var host = ctx.request.header.host;
        imageUrl = `http://${host}/${imageUrl}`
        await membersModel.updateMany({ _id: id }, { $set: { name, age, like, imageUrl } })
    }
    ctx.redirect('/index')
})
module.exports = router;