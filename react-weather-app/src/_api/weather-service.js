import { fetchWeather, fetchForecast } from './weather'
import { kelvinToCelsius, mileToKm } from '../_helpers/unit-conversion'
import { convertUnixToDate, getNextSevenDays } from '../_helpers/date-utils'

const weatherService = {
    getWeather,
    getForecast
}

async function getWeather(city) {
    const response = await fetchWeather(city)
    return parseWeatherData(response)
}

async function getForecast(city) {
    const response = await fetchForecast(city)
    return parseForeCastData(response)
}

function parseWeatherData(response) {
    const temp = kelvinToCelsius(response.main.temp);
    const temp_max = kelvinToCelsius(response.main.temp_max);
    const temp_min = kelvinToCelsius(response.main.temp_min);
    const feels_like = kelvinToCelsius(response.main.feels_like);
    const data = {
        main: {...response.main, temp, temp_max, temp_min, feels_like},
        name: response.name,
        sys: response.sys,
        weather: response.weather[0],
        wind: {
            deg: response.wind.deg,
            speed: mileToKm(response.wind.speed)
        }
    }
    return data;
}

function parseForeCastData(response) {
    console.log(response);
    if (response.cod != 200)
        return null;

    const next7Days = getNextSevenDays();

    const forecasts = [];

    const uniqueDays = filterUniqueDays(response); 
    console.log(uniqueDays)
    
    uniqueDays.forEach((item, index) => {
        forecasts.push({
            day: next7Days[index],
            temp: {
                tempMin: kelvinToCelsius(item.main.temp_max),
                tempMax: kelvinToCelsius(item.main.temp_min),
            },
            weather: item.weather[0]
        })
    });
    

    return forecasts;
}

function filterUniqueDays(data) {
    const uniqueDays = new Set();
    const filteredData = data.list.filter(item => {
        const day = convertUnixToDate(item.dt);
        if (!uniqueDays.has(day)) {
            uniqueDays.add(day);
            return true;
        }
        return false;
    })
    return filteredData;
}

export { weatherService }