require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('spotify');
var OMDB = require('request');
var fs = require('fs');

var twitterLiri = new Twitter(keys.twitter);
var spotifyLiri = new Spotify(keys.spotify);


function liriCons() {
    this.myTweets = myTweets;
    this.spotifyThis = spotifyThis;
    this.movieThis = movieThis;
    this.doWhatItSays = doWhatItSays;
}

//===============================================================================
// Twitter API
// npm install twitter 
// var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'ZachG', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(myTweets);
    console.log("hello world!");
  }
});

//===============================================================================
// Spotify API
// npm install spotify

var client = new Spotify({
    id: '',
    secret: ''
  });

  // I have no idea what I'm doing

//===============================================================================
// OMDB API
// npm install dotenv
// http://www.omdbapi.com/?i=tt3896198&apikey=3668b339

// I don't even know how to begin this answer