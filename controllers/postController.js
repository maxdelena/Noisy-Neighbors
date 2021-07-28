const postEntry = require('../models/bandPost')

async function getPostEntry(req, res) {
    let post = await
        res.render('posts/index', {
            postEntry, userq: req.user
        })
}

module.exports = {getPostEntry}