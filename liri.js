
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
let argument=process.argv.slice(3).join(" ");

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
function twitter(){
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
  				for (var i = 0; i < tweets.length; i++) {
  					console.log(tweets[i].text);
  				}
  			} else {
  				console.log(error);
  			}
});
}
// twitter();
//spotify-this-song

// // function music(){
//   if (!argument) {
// 			spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
// 				if (err) {
// 					return console.log('Error occurred: ' + err);
// 				}
// 				console.log("This song is from the artist(s): " + data.tracks.items[8].artists[0].name);
// 				console.log("This song's name is: " + data.tracks.items[8].name);
// 				console.log("Preview url for this track: " + data.tracks.items[8].preview_url);
// 				console.log("This song is from the album: " + data.tracks.items[8].album.name);
// 			});
// 		} else {
// 			// user's song choice, or from random.txt
// 			spotify.search({ type: 'track', query: argument }, function(err, data) {
// 				if (err) {
// 					return console.log('Error occurred: ' + err);
// 				}
// 				console.log("This song is from the artist(s): " + data.tracks.items[0].artists[0].name);
// 				console.log("This song's name is: " + data.tracks.items[0].name);
// 				console.log("Preview url for this track: " + data.tracks.items[0].preview_url);
// 				console.log("This song is from the album: " + data.tracks.items[0].album.name);
// 			});
// 		}


// }


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
function doit(){
  fs.readFile("random.txt", "utf-8", function(error, data) {
			if (!error) {
        console.log("Your movie is loading...")
        let random = data.split(",");
			command = random[0];
			argument = random[1];
			movie();

			}else{
        console.log('There was an error in your request');
      }


});
};
