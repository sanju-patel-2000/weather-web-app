const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image");

async function weatherCheck(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=447606e600106179fe57cef876a73a85`
  );
  const data = await response.json();

  console.log(data);
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp-273)}°c`;
  document.querySelector(".city").innerHTML = `${data.name}`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".speed").innerHTML = `${data.wind.speed} km/h`;

  if (data.weather[0].main == "Mist") {
    weatherImage.src = "./public/images/mist.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherImage.src = "./public/images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src="./public/images/rain.png"
  } else if (data.weather[0].main == "Snow") {
    weatherImage.src="./public/images/snow.png"
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src="./public/images/drizzle.png"
  }
}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
