var openWeatherKey = "0af2b24c3a2c8ccf342a6bfcd937034b";
var button = document.getElementById("search-button");

button.addEventListener("click", function(){
    var input = document.getElementById("city-search").value;
    openWeatherCall(input);
    console.log("clicked");

})

// function displayWeather(){
//     openWeatherCall();

// }
function openWeatherCall(parameter){
    console.log(parameter);
    const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + parameter + "&limit=5&appid=" + openWeatherKey;

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data[0])
        console.log(data[0].name)
        console.log(data[0].lat)
        console.log(data[0].lon)
        //content.innerHTML = "";
        geoWeatherCall(data[0].lat, data[0].lon)
    })

}




function geoWeatherCall(lat, lon){
    const apiURL2 = "http://api.openweathermap.org/data/2.5/forecast?lat=" +lat+ "&lon=" +lon+ "&appid=" + openWeatherKey;

    fetch(apiURL2)
    .then(response => response.json())
    .then(secondData => {
        console.log(secondData);
    })
}