window.addEventListener('load', () => {
    //let long, lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            //long = position.coords.longitude;
            //lat = position.coords .latitude;
            //enable request from local host use cors-anywhere and proxy
            const key = `c958cec2a3454efea21653630899b4b5`
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            //const api = `https://api.openweathermap.org/data/2.5/weather?q=Lagos,nigeria&APPID=a6c860ff11313360206ef91549627b38`;
            const api = `${proxy}https://api.weatherbit.io/v2.0/current?city=Lagos,NG&${key}`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    /* const {
                         temp,
                         timezone
                     } = data.main;

                     //set DOM Elements from the API 
                     temperatureDegree.textContent = temp;
                     temperatureDescription.textContent = "cloudy";
                     locationTimezone.textContent = data.timezone / 60;*/

                });

        });



    }

});

//adding icons like rainy,cloudy
/*const skycons =new skycons({"color:white"});*/