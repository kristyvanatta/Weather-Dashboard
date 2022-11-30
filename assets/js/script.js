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
        document.getElementById("current-city").innerHTML = data[0].name;
    })

}




function geoWeatherCall(lat, lon){
    const apiURL2 = "http://api.openweathermap.org/data/2.5/forecast?lat=" +lat+ "&lon=" +lon+ "&appid=" + openWeatherKey;

    fetch(apiURL2)
    .then(response => response.json())
    .then(secondData => {
        console.log(secondData);
        console.log(secondData.list[0].main.temp)
        console.log(secondData.list[0].main.humidity)
        console.log(secondData.list[0].wind.speed)

        //(0K − 273.15) × 9/5 + 32 = -459.7°F
        function tempConversion(dataTemp) { return ((dataTemp - 273.15) * (9/5) + 32).toFixed(2)}
        console.log(tempConversion(secondData.list[0].main.temp));

        document.getElementById("temperature").innerHTML = tempConversion(secondData.list[0].main.temp);
        document.getElementById("humidity").innerHTML = secondData.list[0].main.humidity;
        document.getElementById("wind").innerHTML = secondData.list[0].wind.speed;
        
        document.getElementById("futureTemp0").innerHTML = tempConversion(secondData.list[4].main.temp);
        document.getElementById("futureHumidity0").innerHTML = secondData.list[4].main.humidity;
        document.getElementById("futureWind0").innerHTML = secondData.list[4].wind.speed;
        // document.getElementById("futureImg0").innerHTML = secondData.list[4].weather[4].icon;

        document.getElementById("futureTemp1").innerHTML = tempConversion(secondData.list[12].main.temp);
        document.getElementById("futureHumidity1").innerHTML = secondData.list[12].main.humidity;
        document.getElementById("futureWind1").innerHTML = secondData.list[12].wind.speed;
        // document.getElementById("futureImg1").innerHTML = secondData.list[12].weather[12].icon;

        document.getElementById("futureTemp2").innerHTML = tempConversion(secondData.list[20].main.temp);
        document.getElementById("futureHumidity2").innerHTML = secondData.list[20].main.humidity;
        document.getElementById("futureWind2").innerHTML = secondData.list[20].wind.speed;
        // document.getElementById("futureImg2").innerHTML = secondData.list[20].weather[20].icon;

        document.getElementById("futureTemp3").innerHTML = tempConversion(secondData.list[28].main.temp);
        document.getElementById("futureHumidity3").innerHTML = secondData.list[28].main.humidity;
        document.getElementById("futureWind3").innerHTML = secondData.list[28].wind.speed;
        // document.getElementById("futureImg3").innerHTML = secondData.list[28].weather[28].icon;

        document.getElementById("futureTemp4").innerHTML = tempConversion(secondData.list[36].main.temp);
        document.getElementById("futureHumidity4").innerHTML = secondData.list[36].main.humidity;
        document.getElementById("futureWind4").innerHTML = secondData.list[36].wind.speed;
        // document.getElementById("futureImg4").innerHTML = secondData.list[36].weather[36].icon;
    })
}