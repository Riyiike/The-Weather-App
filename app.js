window.addEventListener('load', () => {
  //let lon, lat;

  //assigning variables to the dom object
  let backgroundImage = document.querySelector('.weather-img');
  let locationTimezone = document.querySelector('.location-timezone');
  let locationName = document.querySelector('.location-name');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureDescription = document.querySelector(
    '.temperature-description'
  );
  let temperatureSection = document.querySelector('.temperature');
  let temperatureSpan = document.querySelector('.temperature span');
  let IconElement = document.querySelector('.icon');
  let cloudDegree = document.querySelector('.weather-description-1');
  let windDegree = document.querySelector('.weather-description-2');
  let humidityDegree = document.querySelector('.weather-description-3');

  //making the api call

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      //enable request from local host use cors-anywhere and proxy
      const key = `c958cec2a3454efea21653630899b4b5`;
      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const api = `${proxy}https://api.weatherbit.io/v2.0/current?city=Lagos,NG&lat=${lat}&lon=${lon}&key=${key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          const {
            temp,
            description,
            timezone,
            datetime
          } = result;

          //set DOM Elements from the API data

          temperatureDegree.textContent = result.data[0].temp;
          temperatureDescription.textContent =
            result.data[0].weather.description;
          locationTimezone.textContent = result.data[0].datetime;
          locationName.textContent = result.data[0].timezone;
          cloudDegree.textContent = result.data[0].clouds;
          windDegree.textContent = result.data[0].wind_spd;
          humidityDegree.textContent = result.data[0].rh;
          IconCode = result.data[0].weather.icon;
          weatherCode = result.data[0].weather.code;

          //change formula for celsius and fahrenheit
          let celsius = (result.data[0].temp - 32) * (5 / 9);

          //covert temperature degree  to celsius/ degree fahrenheit
          temperatureSection.addEventListener('click', () => {
            if (temperatureSpan.textContent === 'F') {
              temperatureSpan.textContent = 'C';
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = 'F';
              temperatureDegree.textContent = result.data[0].temp;
            }
          });

          //Changing icons according to weather

          IconElement.innerHTML = `<img src="icons/${IconCode}.png"/>`;
          //changing the background images according to the change in weather using weather code
          //backgroundImage.innerHTML = `<img src="img/Wea-/${weatherCode}.png"/>`;
          backgroundImage.src = `img/Wea-${weatherCode}.jpg`;
        });
    });
  }
});