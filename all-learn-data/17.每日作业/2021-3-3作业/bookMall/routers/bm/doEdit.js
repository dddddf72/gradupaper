const router = require("koa-router")();
const path = require('path')
const booksModel = require("../../models/books");
const fileUpload = require('../../utils/upload')
router.post('/bm/doEdit', async (ctx) => {
    var { id, name, labels, rating, evaluate, price, like } = ctx.request.body;
    var file = ctx.request.files.pic
    var data = { name, labels, rating, evaluate, price, like: Boolean(like) }
    var uploadName = path.basename(file.path)
    var isUpload = Boolean(file.name.trim());
    if (isUpload) {
        fileUpload(file.path, uploadName);
        var pic = ctx.origin + '/' + uploadName;
        data.pic = pic;
    }
    await booksModel.updateOne({
        _id: id
    }, data)
    console.log(data)
    ctx.redirect("/bm/index")

})
module.exports = router;