const mongoose = require('./db')
var usersSchema = new mongoose.Schema({
    username: String,
    pwd: Number
}, {
    versionKey: false
})
var usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;