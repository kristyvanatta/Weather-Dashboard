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

        var weathericon = response.weather[0].icon;
        var iconurl ="https://openweathermap.org/img/wn/" +weathericon +"@2x.png";
        
        var date= new Date(response.dt*1000).toLocaleDateString();
        $(currentCity).html(response.name +"("+date`,<img src=${iconurl}>`);

        //current temperature
        var tempF = (response.main.temp -273.15) *1.80 +32;
        $(currentTemp).html((tempF).toFixed(2)+"&#8457");

        //humidity
        $(currentHumidity).html(response.main.humidity+"%");

        //wind
        var ws=response.wind.speed;
        var windmph=(ws*2.237).toFixed(1);
        $(currentWSpeed).html(windmph+"MPH");

    }
}
