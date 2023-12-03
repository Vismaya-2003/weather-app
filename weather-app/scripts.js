const apiKey = "eb382a88a402551236ae254ff8d24719";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Haze":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = "images/default.png"; // Add a default image
    }
    document.querySelector(".weather").style.display = "block";
    
} 


// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
});
