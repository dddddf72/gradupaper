const mongoose = require('mongoose')
// 1.连接本地数据库
mongoose.connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true });
// 2.在本地定义一个Schema和远程的数据库的字段映射
var Imageschema = new mongoose.Schema({
    name: String,
    rating: String,
    imageUrl: String
}, {
    versionKey: false
})
var ImagesModel = mongoose.model('images', Imageschema)
module.exports = ImagesModel;