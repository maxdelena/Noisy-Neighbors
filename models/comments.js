const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    captiion: { type: String },
    bandPost: {type: Schema.Types.ObjectId, ref: 'bandPost'},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Comment = mongoose.model('Comment', commentSchema);

mongoose.model('Comment', commentSchema);