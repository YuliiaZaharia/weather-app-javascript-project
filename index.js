const api = {
    root: "http://api.openweathermap.org/data/2.5/",
    key: "c5f91eb9fbdcb59a73cdd5411bb6dac8"
}

const input = document.querySelector("#input"); 
input.addEventListener("keypress", enter);

function enter(e) {
if (e.keyCode === 13) {
    getInfo(input.value);
}
}

async function getInfo (data) {
const result = await fetch(`${api.root}weather?q=${data}&units=metric&appID=${api.key}`);
const resultWeather = await result.json();
console.log(resultWeather)
displayResultWeather(resultWeather);
}

function displayResultWeather(resultWeather) {
    let city = document.querySelector("#city");
    city.textContent = `${resultWeather.name}, ${resultWeather.sys.country}`; 

    let temperature = document.querySelector("#temp");
    temperature.innerHTML = `${Math.round(resultWeather.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feels");
    feelsLike.innerHTML = `${Math.round(resultWeather.main.feels_like)}<span>°</span>`;

    let description = document.querySelector("#description");
    description.innerHTML = `${resultWeather.weather[0].description}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(resultWeather.main.temp_min)}<span>°</span>` + " " + "Max " + `${Math.round(resultWeather.main.temp_max)}<span>°</span>`
}
