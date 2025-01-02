const apikey = "7b95e1bbabc2d01467929191e1119989";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const tempimage = document.querySelector(".tempimg img");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = (data.wind.speed * 3.6).toFixed(2) + "km/hr";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp h1").innerHTML = Math.round(data.main.temp) + "°C";

    if (data.weather[0].main == "Clouds") {
        tempimage.src = "image/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        tempimage.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        tempimage.src = "image/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        tempimage.src = "image/heavy-rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        tempimage.src = "image/snow.png";
    }
    else{
        tempimage.src = "image/humidity.png";
    }
}

searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value);
})