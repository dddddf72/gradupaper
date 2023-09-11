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
var upload = multer({
    storage: storage
});
module.exports = upload;