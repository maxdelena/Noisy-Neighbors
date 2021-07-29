
const PostEntry = require('../models/bandPost')
const Users = require('../models/users')

function index(req, res) {
  Users.find({}, function(err, creators) {
    res.render('posts/index', { creators , user: req.user});
  });
}

//index2=createpost//saves in db
async function index2(req, res) {

    try {
        let post = new PostEntry(req.body);
        let result = await post.save();
        res.redirect('/posts/index');
        return result;
    } catch (err) {
        console.log(err);
    }
}

function getPostEntry(req, res) {
  PostEntry.find({}, function(err, posts) {
    res.render('posts/index', { posts , user: req.user});
  });
}

function retrieveForm(req, res) {
    res.render('posts/createPost')
}




module.exports = { index, index2, getPostEntry, retrieveForm};