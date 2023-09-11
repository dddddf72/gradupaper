const mongoose = require('./baseDB/db-movies')
const MovieSchema = require('./Schema/MovieSchema')

const comingSoonSchema = mongoose.Schema(MovieSchema)
const comingSoonModel = mongoose.model('comingSoon', comingSoonSchema, 'comingSoon')

module.exports = comingSoonModel;