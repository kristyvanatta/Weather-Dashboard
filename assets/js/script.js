var input = document.getElementById("city-search");
var button = document.getElementById("search-button");

button.addEventListener("click", function(){
    displayWeather();
    console.log("clicked");

})

function displayWeather(){

}
function openWeatherCall(parameter){
    var openWeatherKey = "0af2b24c3a2c8ccf342a6bfcd937034b"
    const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + input + "&limit=5&appid=" + openWeatherKey;

fetch(apiURL)
.then(response => response.json)
.then(data => {
    console.log(data);
    content.innerHTML = "";
})


    const apiURL2 = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + openWeatherKey;

fetch(apiURL2)
.then(response => response.json())
.then(secondData => {
    console.log(secondData);

})
}