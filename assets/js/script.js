//city search variable for stored city
var city="";
var searchCity =$("#search-city");
var searchButton =$("#search-button");
var clearButton =$("#clear-history");
var currentCity =$("#current-city");
var currentUvindex =$("#uv-index");
var currentWind =$("#wind");
var currentTemp =$("#temperature");
var currentHumidity =$("#humidity");
var searchCity =[];

//city search
function find(city){
    for (var i=0; i<searchCity.length; i++){
        if(city.toUpperCase()===searchCity[i]){
            return -1;
        }
    }
    return 1;
}

//set up API Key
var apiKey ="0af2b24c3a2c8ccf342a6bfcd937034b";

//Displays the weather
function weather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city) {
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response) {
        console.log(response);

    }
}
