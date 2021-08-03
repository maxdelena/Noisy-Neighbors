const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandPostSchema = new Schema({
    artistName: { type: String, required: false },
    eventDate: { type: Date, required: false , default: Date.now() },
    eventName: { type: String, required: false },
    evenTime: { type: String, required: false },
    venueName: { type: String, required: false },
    venueLocation: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const Band = mongoose.model('Band', bandPostSchema);

module.exports = Band;

    