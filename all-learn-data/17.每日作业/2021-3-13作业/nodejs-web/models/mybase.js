const { mongodb, Schema } = require('./db')
var MybaseSchema = new Schema({
    name: String,
    age: Number
})
var MybaseModel = mongodb.model('sm', MybaseSchema, 'sm')
module.exports = MybaseModel;