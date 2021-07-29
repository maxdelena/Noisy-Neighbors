const express = require('express');
const session = require("express-session");
const morgan = require('morgan');

const passport = require("passport");


const PORT = process.env.PORT || 3000;


//require the environment file
require("dotenv").config();

const app = express();
//DB 
require('./config/database');
require("./config/passport");

const homepage = require('./routes/index');
const posts = require('./routes/posts');
const search = require('./routes/searchBand')

//view engine 
app.set('view engine', 'ejs');

//MIDDLEWARE


app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//SESSIONS

// new code below
app.use(
  session({
    secret: "MaxIbrahim!",
    resave: false,
    saveUninitialized: true,
  })
);

// app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());


//ROUTES
app.use('/', homepage);
app.use('/posts', posts);
app.use('/search', search);



app.listen(PORT, function () {
    console.log(`starting server at ${PORT}`);
});