# weather-dashboard-challenge
An app to view various weather conditions around the world. You can use the search bar to search for a specific location and view current weather conditions as well as a five day forecast, and all of your searches will be saved on your local machine for quicker access the next time you wish to view conditions for that location.

Screenshot of deployed website: 

link to deployed website:


// fetch weather API
function fetchWeather () {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + searchQuery + '&appid=075bfb0a221c22109566147d3393fe9b'
      )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response.weather.description);
    });
}


// fetch affirmation quote API
function fetchAff() {
    fetch("https://dulce-affirmations-api.herokuapp.com/affirmation")
    .then(async function(response) {
        const response_1 = await response.json();
        console.log(response_1[0].phrase);
        var affirmation = document.querySelector("#placeholder");
        var input = document.createElement("p");
        var theAffirmation = response_1[0].phrase
        input.textContent = response_1[0].phrase;
        console.log(theAffirmation);
        affirmation.appendChild(input);
        return theAffirmation;
});
}

// fetch joke API
function fetchJoke() {
    fetch(
        'http://api.icndb.com/jokes/random?'
        )
            .then(function(response) {
              return response.json();
            })
            .then(function(response) {
              console.log(response.value.joke);
              return response.value.joke;
        });
}
  
function sendText(theMessage, phoneNumber) {
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: phoneNumber,
        message: theMessage + "\n" + fetchAff() + "\n" + fetchJoke(),
        key: 'c2d73da2fe22fe551cc99c64af7206fef2208645cX0nY7S9R2EJlnSyezQd3HnzK',
      }),
    }).then(response => {
    return response.json();
    }).then(data => {
      console.log(data);
    });;
};

 
  setInterval(function() {
    textEvents.forEach(function(event) {
        let currentTime = moment().format("HH:mm");

        if (currentTime == event.time) {
            sendText();
            //removeEvent();
        }
    });
  }, 10000);