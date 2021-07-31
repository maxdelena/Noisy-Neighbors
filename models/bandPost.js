const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandPostSchema = new Schema({
    artistName: { type: String, required: true },
    eventDate: { type: Date, required: true , default: Date.now() },
    eventName: { type: String, required: true },
    evenTime: { type: String, required: true },
    venueName: { type: String, required: true },
    venueLocation: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const Band = mongoose.model('Band', bandPostSchema);

module.exports = Band;

    