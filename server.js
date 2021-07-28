const express = require('express');

const app = express();
const homepage = require('./routes/index');

const PORT = process.env.PORT || 3000;


//require the environment file
require("dotenv").config();
//DB 
require('./config/database');

//view engine 
app.set('view engine', 'ejs');

//MIDDLEWARE



//ROUTES
app.use('/', homepage);


//SESSIONS



app.listen(PORT, function () {
    console.log(`starting server at ${PORT}`);
});