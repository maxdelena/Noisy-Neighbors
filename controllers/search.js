const axios = require('axios');

async function index3(req, res) {

    let artistName = req.body.artistName;
    let app_id = 'acfb8480bd4f7425b7e9f7081669bea7'
    let resultData 
    
    axios.get(`https://rest.bandsintown.com/artists/${artistName}/events/?app_id=${app_id}`)
        .then(function (response) {
            resultData = response.data
            const events = [];
            for (let i = 0; i < resultData.length; i++) {
                const event = {
                location: resultData[i].venue.location,
                venue: resultData[i].venue.name,
                artistName: resultData[0].artist.name,
                date: resultData[i].datetime,
                offerTicket: resultData[i].offers[0].url
                
                }
                events.push(event);
                console.log(events);
            }
              res.render('posts/index', {events}   )
           
        })
    
   
}

module.exports = {index3};
