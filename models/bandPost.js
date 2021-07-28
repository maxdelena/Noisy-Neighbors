const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandPostSchema = new Schema({
    artistName: { type: String, required: true },
    artistImage: { type: String, required: true },
    eventOnSaleDate: { type: Date, required: true },
    eventDate: { type: Date, required: true },
    eventDescription: { type: String, required: true },
    eventTitle: { type: String, required: true },
    venueName: { type: String, required: true },
    venueCity: { type: String, required: true },
    venueRegion: { type: String, required: true },
    venueCountry: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const Band = mongoose.model('Band', bandPostSchema);

module.exports = Band;

    