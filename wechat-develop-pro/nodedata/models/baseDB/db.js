const mongoose = require('mongoose')
mongoose.connect('mongodb://test:123@47.119.132.191:27017/wechats?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = mongoose;