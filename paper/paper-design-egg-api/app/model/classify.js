module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const books = app.mongooseDB.get('books');
    app.bookmodel = bookmodel
    const classifySchema = new Schema({
        title: { type: String },
        imgUrl: { type: String },
        authors: { type: String },
        abstract: { type: String },
        news: { type: Boolean },
        collected: { type: Boolean }
    },
        {
        versionKey: false       //添加versionKey在向数据库添加内容的时候避免出现__v:0
        }
    );
    function bookmodel(m) {
        return books.model(m, classifySchema)
    }
}