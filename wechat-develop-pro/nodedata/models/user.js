const { mongodb, Schema } = require('./baseDB/db-movies')
// Schema中定义模糊数组，可以添加但是不能删除
const schema = new Schema({
    name: String,
    collects: [
        {
            _id: Schema.Types.ObjectId,
            pic: String,
            title: String,
            slogo: String,
            evaluate: String,
            rating: Number,
            collected: Boolean,
            labels: Array
        }
    ],
    history: [
        {
            _id: Schema.Types.ObjectId,
            pic: String,
            title: String,
            rating: String,
            slogo: String,
            evaluate: String,
            labels: Array,
            collected: Boolean
        }
    ]
})
var userModel = mongodb.model('User', schema, 'user')

module.exports = userModel;