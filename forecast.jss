const apiKey = 'your_openweathermap_api_key';

function getWeatherByLocation() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    }
}

function fetchWeather(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Location not found. Please try again.'));
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weatherData');
    const { name, weather, main } = data;
    weatherDataDiv.innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].main} - ${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Pressure: ${main.pressure} hPa</p>
    `;
}
