
const PostEntry = require('../models/bandPost')
const Users = require('../models/users')
const axios = require('axios');

function index(req, res) {
  PostEntry.find({}, function(err, Posts) {
    console.log("Executed");
    console.log(Posts);
    res.render('posts/index', { Posts , user: req.user});
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

async function search(req, res) {
  //console.log(req);
  let artistName = req.body.artistName;
  let app_id = 'acfb8480bd4f7425b7e9f7081669bea7'
  let resultData 
  const Posts = [];
    axios.get(`https://rest.bandsintown.com/artists/${artistName}/events/?app_id=${app_id}`)
        .then(function (response) {
            resultData = response.data
            console.log("inside then")
            console.log(resultData);
            
            for (let i = 0; i < resultData.length; i++) {
                const event = {
                  venueLocation: resultData[i].venue.location,
                venueName: resultData[i].venue.name,
                artistName: resultData[0].artist.name,
                eventDate: resultData[i].datetime,
                eventName:resultData[i].name,
                }
              
                Posts.push(event);
              
            }
              res.render('posts/search', {Posts}   )
           
        }).catch((err)=>{
          console.log(err,"error api");
          res.render('posts/search', {Posts}   )
        })

  
 
}


module.exports = { search,index, index2, getPostEntry, retrieveForm};