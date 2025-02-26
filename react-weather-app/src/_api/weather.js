const API_KEY = 'your_api_key'
const baseUri = `https://api.openweathermap.org/data/2.5`;

async function fetchWeather(city) {
    const uri = `${baseUri}/weather?q=${city}&appid=${API_KEY}`
    const response = await fetch(uri);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json)
    return json;
}

async function fetchForecast(city) {
    const uri = `${baseUri}/forecast?q=${city}&appid=${API_KEY}`
    const response = await fetch(uri);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json)
    return json;
}

export { fetchWeather, fetchForecast }