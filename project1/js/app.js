/* const baseURL =`http://www.omdbapi.com/?`;
const apiKey=`apikey=bf73b3c`;
const queryType = `t=`;
let titleQuery = 'eraserhead';
let queryURL = baseURL + apiKey + '&' + queryType;   */

 $(()=>{

console.log("I am at before ajax!");
//search button logic
$("#search").on("click",function(event){
  event.preventDefault();
  console.log("I am inside onclick");
 getData();
});


const getData = () => {
  
  var newsData;
  var giphyData;
  var cityData;
  var weatherData;

  //News API - New York Times
 $.ajax({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Berlin&api-key=CToDJ8Mw4A2LtQLGhxE4xtG17dRisE2J`
  }).then((news) => {
   newsData = news;
    setTimeout(console.log(newsData),1000);
     }, (error) => {
    console.error(error)
  }); 

  //GIPHY API
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=Berlin&api_key=dc6zaTOxFJmzC&limit=10`
  }).then((giphy) => {
   giphyData = giphy;
    //setTimeout(console.log(giphyData.data[0].images.fixed_height.url),2000);
    setTimeout(console.log(giphyData.data[0]),1000);
    
  }, (error) => {
    console.error(error)
  });
  
  //Weather API - Accuweather
  $.ajax({
    url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/178087?apikey=UTyEmUNTR7FmVptMCKS7CHHAdSeoDnQR`
  }).then((cities) => {
   weatherData = cities;
    setTimeout(console.log(weatherData.DailyForecasts),1000);
  }, (error) => {
    console.error(error);
  });
setTimeout(()=>{
  $("#results").css("display","flex");
  $("#weather-table").append(`<tr><th>Date</th> <th>Day Weather</th> <th>Max Temperature</th> <th>Min Temperature</th> <th>Night Weather</th> </tr>`);
  
  for(i=0;i<5;i++){
    const img = giphyData.data[i].images.fixed_height.url;
    const $giphyDiv = $("<img>").attr("src",img);

    const date = weatherData.DailyForecasts[i].Date.substring(0,10);
    const dayWeather = weatherData.DailyForecasts[i].Day.IconPhrase;
    const maxTemp = weatherData.DailyForecasts[i].Temperature.Maximum.Value + " F";
    const minTemp = weatherData.DailyForecasts[i].Temperature.Minimum.Value + " F";
    const nightWeather = weatherData.DailyForecasts[i].Night.IconPhrase;
    //const $weatherDiv = $("<div>").html(`<tr><td>${dayWeather}</td><td>${maxTemp}</td><td>${minTemp}</td></tr>`);
    
    const newsLink = newsData.response.docs[i].web_url;
    const newsHeader = newsData.response.docs[i].headline.main;
    const $newsDiv = $("<div>").html(`<strong>Article - ${i+1}</strong> <a href='${newsLink}'>${newsHeader}</a>`);
 
     $("#giphy").append($giphyDiv);
     $("#weather-table").append(`<tr><td>${date}</td><td>${dayWeather}</td><td>${maxTemp}</td><td>${minTemp}</td><td>${nightWeather}</td></tr>`);
     $("#news").append($newsDiv);
 
   }
},2000)


};
console.log("I am at after ajax!");
console.log($("#cities").val());

});


