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