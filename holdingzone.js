function movie(){
  if(!argument){
    request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&apikey=trilogy", function(error, response, body) {

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

  }
}

//reading random.txt and calling a command





// movie(){
//   request("http://www.omdbapi.com/?t=" + argument[3]+ "&y=&plot=short&apikey=trilogy", function(error, response, body) {
//
//     // If the request is successful (i.e. if the response status code is 200)
//     if (!error && response.statusCode === 200) {
//
//
//       console.log("The movie's title is: " + JSON.parse(body).Title);
//       console.log("This movie was released in the year: " + JSON.parse(body).Year);
//       console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
//       console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
//       console.log("The movie was produced in: " + JSON.parse(body).Country);
//       console.log("The language(s) this movie was made in is/are: " + JSON.parse(body).Language);
//       console.log("The movie's plot is: " + JSON.parse(body).Plot);
//       console.log("The movie's actors are: " + JSON.parse(body).Actors);
//
//     }
//   });
// }
switch(command){
    case 'my-tweets':
        twitter();
    break;

    case 'movie-this':
        movie();
    break;

    case 'do-what-it-says':
        doit();
    break;

    default:
    break;
}
