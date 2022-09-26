//city search variable for stored city
var city="";
var searchCity =$("#search-city");
var searchButton =$("#search-button");
var currentCity =$("#current-city");
var currentUvindex =$("#uv-index");
var currentWind =$("#wind");
var currentTemp =$("#temperature");
var currentHumidity =$("#humidity");


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
//change this to a fetch request
function currentWeather(city) {
    city = $("#city-search").val();
    var queryURL= "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response) {
        console.log(response);

        var weathericon = response.weather[0].icon;
        var iconurl ="http://openweathermap.org/img/wn/" +weathericon +"@2x.png";
        
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

        //UV Index
        UVIndex (response.coord.lon, respndse.coord.lat);
        forecast(response.id);
        if(response.cod==200){
            searchCity=JSON.parse(localStorage.getItem("cityName"));
            console.log(searchCity);
            if (searchCity==null){
                searchCity=[];
                searchCity.push(city.toUpperCase)
    
                localStorage.setItem("cityName",JSON.stringify(searchCity));
                addToList(city);
            }
            else {
                if(find(city)>0){
                    searchCity.push(city.toUpperCase());
                    localStorage.setItem("cityName",JSON.stringify(searchCity));
                    addToList(city);
                }
            }
        }

    });
}

function UVIndex(ln,lt) {
    var uviURL ="http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey+ "&lat="+lt+"&lon="+ln;
    $.ajax({
        url: uviURL,
        method: "GET"
    }).then(function(response){
        $(currentUvindex).html(response.value);
        });
}

function forecast(cityid) {
   // var dayOver= false;
    var queryforecastURL="http://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={apiKey}";
    $.ajax({
        url:queryforecastURL,
        method:"GET"
    }).then(function(response){

        for (i=0; i<5; i++) {
            var date= new Date((response.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
            var iconcode= response.list[((i+1)*8)-1].weather[0].icon;
            var iconurl= "http://openweathermap.org/img/wn/"+iconcode+".png";
            var temp1= response.list[((i+1)*8)-1].main.temp;
            var tempF= (((temp1 -273.5)*1.80)+32).toFixed(2);
            var humidity = response.list[((i+1)*8)-1].main.humidity;

            $("#futureDate"+i).html(date);
            $("#futureImg"+i).html("<img src="+iconurl+">");
            $("#futureTemp"+i).html(tempF+"&#8457");
            $("#futureHumidity"+i).html(humidity+"%");
        }
    });
}

function addToList(city) {
    var listEl =$("<li>"+city.toUpperCase()+"</li>");
    $(listEl).attr("class", "list-group-item");
    $(listEl).attr("data-value", city.toUpperCase());
    $(".historyList").append(listEl);
}

function pastSearch(event) {
    var liEl= event.target;
    if (event.target.matches("li")) {
        city= liEl.tectContent.trim();
        currentWeather(city);
    }
}

function loadLastCity() {
    $("ul").empty();
    var searchCity =JSON.parse(localStorage.getItem("cityName"));
    if (searchCity!==null) {
        searchCity =JSON.parse(localStorage.getItem("cityName"));
        for(i=0; i<searchCity.length; i++) {
            addToList(searchCity[i]);
        }
        city= searchCity[i-1];
        currentWeather(city);
    }
}


$("#search-button").on("click",currentWeather);
$(document).on("click",pastSearch);
$(window).on("load", loadLastCity);
console.log("hello");