const mongoose = require('mongoose')
var mongodb = mongoose.createConnection('mongodb://test:123@47.119.132.191:27017/mybase?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
var Schema = mongoose.Schema;
module.exports = { mongodb, Schema };