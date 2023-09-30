const api_key = "16fd244e50ada4796c3605c2d4577da2";
const citySearch = document.querySelector(".city-search");
const searchBtn = document.querySelector(".search-btn");
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBlock = document.querySelector(".weather");
const error = document.querySelector(".error");

searchBtn.onclick = function () {
  if (citySearch.value) {
    getData(citySearch.value);
  }
};

async function getData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
  );
  const data = await response.json();
  if (response.status != 404) {
    error.classList.add("d-none");
    weatherBlock.classList.remove("d-none");
    cityName.textContent = data.name;
    wind.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    temp.textContent = `${Math.round(data.main.temp)}°c`;
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "images/snow.png";
        break;
    }
  } else {
    weatherBlock.classList.add("d-none");
    error.classList.remove("d-none");
  }
}
