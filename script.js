const Location = document.getElementById("location");
const temperature = document.getElementById("main-temperature");
const feeling = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const WindGust = document.getElementById("wind-gust");
const weatherIcon = document.getElementById("weather-icon");
const weatherMain = document.getElementById("weather-main");
const API_KEY = "dccdd99cd4d88868a3629d73ba012e64";
async function getWeather(city) {
    let data;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
    return data;
}

async function showWeather(city) {
    let data = await getWeather(city);
    if (data === undefined) {
        alert("Something went wrong, please try again later");
        return;
    }
    Location.textContent = data.name ?? "N/A";
    temperature.textContent = data.main.temp ?? "N/A";
    feeling.textContent = data.main.feels_like ?? "N/A";
    humidity.textContent = data.main.humidity ?? "N/A";
    wind.textContent = data.wind.speed ?? "N/A";
    WindGust.textContent = data.wind.gust ?? "N/A";
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherMain.textContent = data.weather[0].main ?? "N/A";

}

//now accessing button
const btn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");

btn.addEventListener("click", () => {
    showWeather(citySelect.value);
});