const baseURL =`http://www.omdbapi.com/?`;
const apiKey=`apikey=bf73b3c`;
const queryType = `t=`;
let titleQuery = 'eraserhead';
let queryURL = baseURL + apiKey + '&' + queryType;

$(()=>{

/* const getMovie = () => {
    $.ajax({
            url:queryURL + titleQuery}
            ).then(
                (movieData)=>{
                   $(".container").html(
                       `<h2> ${movieData.Title} </h2>
                       <h3> ${movieData.Year} </h3>
                       <h4> ${movieData.Rated} <h4>
                       <h5> ${movieData.Genre} <h5>
                       <p> ${movieData.Plot} </p>`
                   )
                },
                (error)=>{
                    console.log(error)
                });
}
getMovie(); */
console.log("I am at before ajax!");
$.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 10,
      "$$app_token" : "kEi8WOJNKuenHiLQz7lsOavlJ"
    }
}).done(function(data) {
  console.log("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
console.log("I am at after ajax!");
});