// 数据库连接配置
const mongoose = require('./db')
var memberschema = new mongoose.Schema({
    name: String,
    age: Number,
    like: String,
    zan: Boolean,
    imageUrl: String
}, {
    versionKey: false
})
var membersModel = mongoose.model('members', memberschema)
module.exports = membersModel;