const router = require("koa-router")();
const path = require('path')
const membersModel = require("../models/members");
const fileUpload = require('../utils/upload')
router.post('/doEdit', async (ctx) => {
    var { id, name, age, like, friend } = ctx.request.body;
    var file = ctx.request.files.file
    var data = { id, name, age: Number(age), like: Boolean(like), friend: Boolean(friend) }
    var uploadName = path.basename(file.path)
    var isUpload = Boolean(file.name.trim());
    if (isUpload) {
        fileUpload(file.path, uploadName);
        var avatar = ctx.origin + '/' + uploadName;
        data.avatar = avatar;
        console.log(avatar)
        await membersModel.updateOne({ _id: id }, data)
    }
    await membersModel.updateOne({
        _id: id
    }, data)
    ctx.redirect("/index")

})
module.exports = router;