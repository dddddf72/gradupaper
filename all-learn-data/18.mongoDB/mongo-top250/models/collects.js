const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true });
var collectschema = new mongoose.Schema({
    name: String,
    collects: Array
}, {
    versionKey: false
})
var collectsModel = mongoose.model('collects', collectschema)
module.exports = collectsModel;