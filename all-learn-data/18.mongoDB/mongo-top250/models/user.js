const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true });
var userschema = new mongoose.Schema({
    name: String,
    collects: Array
}, {
    versionKey: false
})
var usersModel = mongoose.model('user', userschema, "user")
module.exports = usersModel;