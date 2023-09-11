const mongoose = require('./db')
var membersSchema = new mongoose.Schema({
    name: String,
    labels: Array,
    rating: String,
    price: Number,
    pic: String,
    evaluate: String,
    like: Boolean
}, {
    versionKey: false
})
var booksModel = mongoose.model('books', membersSchema, 'books')

module.exports = booksModel;