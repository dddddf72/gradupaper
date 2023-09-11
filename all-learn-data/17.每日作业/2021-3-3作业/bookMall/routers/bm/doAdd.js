const router = require("koa-router")();
const booksModel = require('../../models/books')
const path = require('path')
const fileUpload = require('../../utils/upload')
router.post('/bm/doAdd', async ctx => {
    var { name, labels, rating, evaluate, price, like } = ctx.request.body
    var file = ctx.request.files.pic
    var uploadName = path.basename(file.path);
    var isUpload = Boolean(file.name.trim())
    var data = { name, labels, rating, evaluate, price, like: Boolean(like) }
    if (isUpload) {
        fileUpload(file.path, uploadName);
        var pic = ctx.origin + '/' + uploadName;
        data.pic = pic;
    } else {
        var db = new booksModel(data)
        db.save(err => {
            if (err) throw err;
        })
    }
    ctx.redirect('/bm/index')

})
module.exports = router;