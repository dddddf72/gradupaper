const mongoose = require('./db')
var membersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    avatar: String,
    like: Boolean,
    friend: Boolean
}, {
    versionKey: false
})
var membersModel = mongoose.model('members', membersSchema, 'members')

module.exports = membersModel;