// import { API_KEY } from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=90edfb71e0a9889d0478b04e50258c7a&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp} ℃`;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
};

const getPosition = (position) => {
  console.log(position);
  const { latitude, longitude } = position.coords;
  // console.log(latitude, longitude);
  getCurrentWeather(latitude, longitude);
};

const errorHandler = (error) => {
  const noti = document.querySelector(".noti");
  noti.computedStyleMap.display = "block";
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("geolocation is not available");
}
