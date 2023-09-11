const { mongodb, Schema } = require('./baseDB/db-movies')
const bean = require('./Schema/MovieSchema')
const MovieSchema = new Schema(bean)
function MovieModel(table) {
    return mongodb.model(table, MovieSchema, table)
}
module.exports = MovieModel;