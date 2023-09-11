const { mongodb } = require('./baseDB/db-movies')
const mongoose = require('mongoose')
const schema = require('./Schema/MovieSchema')
const top250schema = mongoose.Schema(schema)
var Top250Model = mongodb.model('Top250', top250schema, 'top250')
module.exports = Top250Model;