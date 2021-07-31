const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true},
    interest: { type: String},
    googleId: String,
    followers: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    followerCount: Number,
    posts: [{type: Schema.Types.ObjectId, ref: 'posts'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comments'}],
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;