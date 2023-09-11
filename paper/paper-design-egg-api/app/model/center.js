module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const books = app.mongooseDB.get('books');
    const UserSchema = new Schema({
        username: { type: String },
        pwd: { type: String },
        collected: [{
            _id: { type:Schema.Types.ObjectId},
            title: { type: String },
            imgUrl: { type: String },
            authors: { type: String },
            abstract: { type: String },
            news: { type: Boolean },
            collected: { type: Boolean }
        }
        ],
        news: [{
            _id: { type:Schema.Types.ObjectId},
            title: { type: String },
            imgUrl: { type: String },
            authors: { type: String },
            abstract: { type: String },
            news: { type: Boolean },
            collected: { type: Boolean }
        }
        ],
        history: [{
            _id:{type:Schema.Types.ObjectId},
            title: { type: String },
            imgUrl: { type: String },
            authors: { type: String },
            abstract: { type: String },
            news: { type: Boolean },
            collected: { type: Boolean }
        }
        ]
    });
        return books.model('Users', UserSchema,'users')
}