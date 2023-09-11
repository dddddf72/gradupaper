const mongoose = require('./baseDB/db')
const articlesSchema = mongoose.Schema({
    date: String,
    title: String,
    avatar: String,
    content: String,
    reading: String,
    collectNum: Number,
    headImgSrc: String,
    author: String,
    dateTime: String,
    detail: String,
    postId: Number,
    music: Object,
    collected: Boolean
})
const articlesModel = mongoose.model('articles', articlesSchema)

module.exports = articlesModel;