const postEntry = require('../models/bandPost')
const Users = require('../models/users')

function index(req, res) {
  Users.find({}, function(err, creators) {
    res.render('posts/index', { creators , user: req.user});
  });
}

async function index(req, res) {
    let artistData = await "https://rest.bandsintown.com/artists/{{artist_name}}/?app_id=yOUrSuP3r3ven7aPp-id"
    let eventData = await "https://rest.bandsintown.com/artists/{{artist_name}}/events/?app_id=yOUrSuP3r3ven7aPp-id"
        res.render('posts/index', {
            postEntry, user: req.user, artistData, eventData
        })
}

module.exports = { index};