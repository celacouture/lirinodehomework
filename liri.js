
require("dotenv").config();
let keys = require('./keys');
let request = require('request-promise');
// let spotify = new Spotify(keys.spotify);
// let Spotify = require('node-spotify-api');
let fs = require('fs-extra');
let Twitter = require('twitter');
let client = new Twitter(keys.twitter);
let params = {screen_name: 'callia1082'};
//command variables
let command=process.argv[2];
let argument=process.argv.slice(3);

switch(command){
    case 'my-tweets':
        twitter();
    break;

    case 'movie-this':
        movie();
    break;

    case 'spotify-this-song':
        music();
    break;

    case 'do-what-it-says':
        doit();
    break;

    default:
    break;
}

//my-tweets, talk to twitter get back 20 tweets print to console
// function twitter(){
//   client.get('statuses/user_timeline', params, function(error, tweets) {
//     //if error, log it, else log the tweets
//     if (error) {
//       console.log(error);
//     }
//     else {
//       // for loop to run through the length of my account's tweets
//       console.log("\n/////////////////TWEET ME////////////////\n");
//       for(i=0; i< tweets.length; i++){
//         // adds a number and dot before to show order
//         console.log((i+1) + ". " + tweets[i].text);
//       }
//     }
//   });
// }
// twitter();
//spotify-this-song

//movie-this
function movie(){
  let noMovie='Mr Nobody';
  if(!argument){
    request("http://www.omdbapi.com/?t="+noMovie+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {


        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("This movie was released in the year: " + JSON.parse(body).Year);
        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
        console.log("The movie was produced in: " + JSON.parse(body).Country);
        console.log("The language(s) this movie was made in is/are: " + JSON.parse(body).Language);
        console.log("The movie's plot is: " + JSON.parse(body).Plot);
        console.log("The movie's actors are: " + JSON.parse(body).Actors);

      }
    });

  }else{
    request("http://www.omdbapi.com/?t="+argument+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {


        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("This movie was released in the year: " + JSON.parse(body).Year);
        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
        console.log("The movie was produced in: " + JSON.parse(body).Country);
        console.log("The language(s) this movie was made in is/are: " + JSON.parse(body).Language);
        console.log("The movie's plot is: " + JSON.parse(body).Plot);
        console.log("The movie's actors are: " + JSON.parse(body).Actors);

      }
    });

  }
};




//do-what-it-says
