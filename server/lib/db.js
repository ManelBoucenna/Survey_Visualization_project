"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Survey = new Schema({
  IMD2002: String,
  IMD2003: String,
  IMD2004: String,
  IMD2005: String
}, { collection: 'master' });

mongoose.model("Survey", Survey);

mongoose.Promise = global.Promise; 

mongoose.connect("mongodb://Manal:Malik199@ds031213.mlab.com:31213/manel_tp4",{ useNewUrlParser: true });
mongoose.connection.on('connected', function(){
    console.log("connection successful");
    
});

module.exports = mongoose.model('Survey',Survey)