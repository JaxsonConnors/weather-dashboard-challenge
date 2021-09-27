async function fetchCity(searchQuery) {

    var responseContainerEl = document.querySelector('#response-container');
    responseContainerEl.style.visibility = 'visible';

    async function fetchCoords() {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchQuery + '&units=imperial&appid=075bfb0a221c22109566147d3393fe9b');

        return resp.json();
    };

    var coordLat = null;
    var coordLon = null;

    await fetchCoords().then(data => {
        coordLat = data.coord.lat;
        coordLon = data.coord.lon;
    });
    
    async function fetchCurrentWeather() {
        console.log(coordLat);
        const resp = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + coordLat + '&lon=' + coordLon + '&exclude=minutely,hourly&units=imperial&appid=075bfb0a221c22109566147d3393fe9b');

        return resp.json();
    };
       /* .then(function(response) {
            return response.json();
        })*/
       await fetchCurrentWeather().then(function(data) {
            console.log(data);

            var currentWeatherEl = document.querySelector('#current-weather');

            let titleEl = document.createElement('h2');
            titleEl.textContent = searchQuery + " (" + moment().format('MM/DD/YYYY') + ") ";

            let currentIcon = document.createElement('img');
            currentIcon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png");

            let weatherEl = document.createElement('p');
            weatherEl.textContent = 'Temp: ' + data.current.temp + '°F' + '\nWind: ' + data.current.wind_speed + ' MPH' + '\nHumidity: ' + data.current.humidity + '%' + '\nUV Index: ' + data.current.uvi;

            currentWeatherEl.appendChild(titleEl);
            currentWeatherEl.appendChild(currentIcon);
            currentWeatherEl.appendChild(weatherEl);
            

            var day1 = document.querySelector('#day1');
            var day2 = document.querySelector('#day2');
            var day3 = document.querySelector('#day3');
            var day4 = document.querySelector('#day4');
            var day5 = document.querySelector('#day5');

            let cardDate1 = document.createElement('h3');
            cardDate1.textContent = moment().add(1, 'days').format('dddd Do');
            let cardWeather1 =  document.createElement('p');
            let day1Icon = document.createElement('img');
            day1Icon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png");
            cardWeather1.textContent = '\nTemp: ' + data.daily[0].temp.day + '°F' + '\nWind: ' + data.daily[0].wind_speed + ' MPH' + '\nHumidity: ' + data.daily[0].humidity + '%' + '\nUV Index: ' + data.daily[0].uvi;

            let cardDate2 = document.createElement('h3');
            cardDate2.textContent = moment().add(2, 'days').format('dddd Do');
            let cardWeather2 =  document.createElement('p');
            let day2Icon = document.createElement('img');
            day2Icon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png");
            cardWeather2.textContent = '\nTemp: ' + data.daily[1].temp.day + '°F' + '\nWind: ' + data.daily[1].wind_speed + ' MPH' + '\nHumidity: ' + data.daily[1].humidity + '%' + '\nUV Index: ' + data.daily[1].uvi;

            let cardDate3 = document.createElement('h3');
            cardDate3.textContent = moment().add(3, 'days').format('dddd Do');
            let cardWeather3 =  document.createElement('p');
            let day3Icon = document.createElement('img');
            day3Icon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png");
            cardWeather3.textContent = '\nTemp: ' + data.daily[2].temp.day + '°F' + '\nWind: ' + data.daily[2].wind_speed + ' MPH' + '\nHumidity: ' + data.daily[2].humidity + '%' + '\nUV Index: ' + data.daily[2].uvi;

            let cardDate4 = document.createElement('h3');
            cardDate4.textContent = moment().add(4, 'days').format('dddd Do');
            let cardWeather4 =  document.createElement('p');
            let day4Icon = document.createElement('img');
            day4Icon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png");
            cardWeather4.textContent = '\nTemp: ' + data.daily[3].temp.day + '°F' + '\nWind: ' + data.daily[3].wind_speed + ' MPH' + '\nHumidity: ' + data.daily[3].humidity + '%' + '\nUV Index: ' + data.daily[3].uvi;

            let cardDate5 = document.createElement('h3');
            cardDate5.textContent = moment().add(5, 'days').format('dddd Do');
            let cardWeather5 =  document.createElement('p');
            let day5Icon = document.createElement('img');
            day5Icon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png");
            cardWeather5.textContent = '\nTemp: ' + data.daily[4].temp.day + '°F' + '\nWind: ' + data.daily[4].wind_speed + ' MPH' + '\nHumidity: ' + data.daily[4].humidity + '%' + '\nUV Index: ' + data.daily[4].uvi;

            day1.appendChild(cardDate1);
            day2.appendChild(cardDate2);
            day3.appendChild(cardDate3);
            day4.appendChild(cardDate4);
            day5.appendChild(cardDate5);

            day1.appendChild(cardWeather1);
            day1.appendChild(day1Icon);
            day2.appendChild(cardWeather2);
            day2.appendChild(day2Icon);
            day3.appendChild(cardWeather3);
            day3.appendChild(day3Icon);
            day4.appendChild(cardWeather4);
            day4.appendChild(day4Icon);
            day5.appendChild(cardWeather5);
            day5.appendChild(day5Icon);
    });
};

function findRecentCity(cityName) {
    fetchCity(cityName);
};

function findCity() {

    var searchQuery = document.querySelector('#search-query').value;

    fetchCity(searchQuery);

    searchedCities(searchQuery);
};

function searchedCities(searchQuery) {

    var searchedPlaces = document.querySelector('.searched-places');

    var cityName = document.createElement('button');
    cityName.setAttribute('class', 'city-name');

    cityName.innerHTML = searchQuery;

    cityName.setAttribute('onclick', 'findRecentCity("' + cityName.innerHTML + '")');

    searchedPlaces.appendChild(cityName);
};