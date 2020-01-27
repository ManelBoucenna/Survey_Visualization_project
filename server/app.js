const express = require('express')
var MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("./lib/db");
const surveyQuestions = require("./routes/survey-questions");


const app = express()


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });


app.use("/api/surveyQuestions", surveyQuestions);
const port = 3000;
app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});

 mongoose.Promise = global.Promise;

module.exports = app;
