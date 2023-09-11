const mongoose = require('mongoose')
// 1.连接本地数据库
mongoose.connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true });
// 2.在本地定义一个Schema和远程的数据库的字段映射
var Top250chema = new mongoose.Schema({
    pic: String,
    title: String,
    raiting: Number,
    zan: Boolean
}, {
    versionKey: false
})
// 3.创建数据模型和数据库中的表映射，获取表
// 注意：model第一个参数要求：1.要和数据库表结合
// 这个模型会和模型名称相同的数据库表连接
// UserSchema就和数据库中的user表形成映射关系
var Top250Model = mongoose.model('top250', Top250chema)
// 执行方法去操作数据库(查询)
// Top250Model.find({}).then(res => {
//     console.log(res)
// })

module.exports = Top250Model;