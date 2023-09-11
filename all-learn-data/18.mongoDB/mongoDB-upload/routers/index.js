const router = require("koa-router")();
const multer = require('koa-multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}/static`)
    },
    filename: function (req, file, cb) {
        console.log(file.originalname)
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})
//加载配置
var upload = multer({
    storage: storage
});
const ImagesModel = require("../models/index");
router.get("/", async ctx => {
    await ctx.render("index")
})
router.post('/doUpload', upload.single('file'), async (ctx, next) => {
    var { name, rating } = ctx.req.body;
    var imageUrl = ctx.req.file.filename;
    var data = new ImagesModel({ name, rating, imageUrl });
    data.save(err => {
        if (err) { throw err };
    })
    ctx.redirect('/show')
})
router.get("/show", async ctx => {
    /* 查询数据 */
    var data = await ImagesModel.find({});
    await ctx.render("show", { arr: data })

})
module.exports = router;