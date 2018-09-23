const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');
const cors = require('cors');

// set up exp
const app = express();

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI);
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use(cors());

app.use('/auth',authRoutes)
app.use('/api',require('./routes/api'));
app.use(function(err,req,res,next){
    console.log(err)
    res.status(422).send({error:err.message})

})

// listen for request
app.listen(process.env.port ||4000, function(){
    console.log('i am listening 4000');
})