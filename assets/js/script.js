//var searchTerm = document.querySelector('#searchTerm').value;

function findCity() {

    var responseContainerEl = document.querySelector('#response-container');

    fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=40.5622&lon=-111.9297&exclude=hourly,daily&appid=075bfb0a221c22109566147d3393fe9b'
      )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            var currentWeatherEl = document.createElement('div');
            var forecastEl = document.createElement('div');
            var forecastTitleEl = document.createElement('h4');
            var day1 = document.createElement('div');
            var day2 = document.createElement('div');
            var day3 = document.createElement('div');
            var day4 = document.createElement('div');
            var day5 = document.createElement('div');

            currentWeatherEl.setAttribute('id', 'current-weather');
            currentWeatherEl.textContent = "TEST";

            forecastEl.setAttribute('id', 'forecast');

            forecastTitleEl.textContent = "5-Day Forecast:";

            day1.setAttribute('class', 'forecast-cards');
            day2.setAttribute('class', 'forecast-cards');
            day3.setAttribute('class', 'forecast-cards');
            day4.setAttribute('class', 'forecast-cards');
            day5.setAttribute('class', 'forecast-cards');

            responseContainerEl.appendChild(currentWeatherEl);
            responseContainerEl.appendChild(forecastEl);
            forecastEl.appendChild(forecastTitleEl);
            forecastEl.appendChild(day1);
            forecastEl.appendChild(day2);
            forecastEl.appendChild(day3);
            forecastEl.appendChild(day4);
            forecastEl.appendChild(day5);
    });
};