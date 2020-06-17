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
 /*  $.ajax({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Atlanta&api-key=CToDJ8Mw4A2LtQLGhxE4xtG17dRisE2J`
  }).then((news) => {
   newsData = news;
    setTimeout(console.log(newsData),2000);
    //$("#movie").html(`<a href='${newsData.response.docs[0].web_url}'>${newsData.response.docs[0].headline.main}</a>`);

  }, (error) => {
    console.error(error)
  }); */

  //GIPHY API
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=Atlanta&api_key=dc6zaTOxFJmzC&limit=10`
  }).then((giphy) => {
   giphyData = giphy;
    setTimeout(console.log(giphyData.data[0].images.fixed_height.url),2000);
    //$("#movie").html(`<a href='${newsData.response.docs[0].web_url}'>${newsData.response.docs[0].headline.main}</a>`);

  }, (error) => {
    console.error(error)
  });
  //Weather API - Accuweather
  $.ajax({
    url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/178087?apikey=UTyEmUNTR7FmVptMCKS7CHHAdSeoDnQR`
  }).then((cities) => {
   cityData = cities;
    setTimeout(console.log(cityData),2000);
    //$("#movie").html(`<a href='${newsData.response.docs[0].web_url}'>${newsData.response.docs[0].headline.main}</a>`);

  }, (error) => {
    console.error(error)
  });

};
console.log("I am at after ajax!");

});


