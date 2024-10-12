import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { WeatherContainer } from "./WeatherCurrent"
import { WeatherForecast } from "./WeatherForecast"
import { weatherService } from "../_api/weather-service"
import { Spinner } from "./Spinner"


function WeatherApp() {

    const [searchValue, setSearchValue] = useState('');
    const [weatherData, setWeatherData] = useState(null)
    const [forecastData, setforecastData] = useState(null);
    const [degreeType, setDegreeType] = useState('celsius');
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleUnitChange = (e) => {
        if (e.target.checked)
            setDegreeType('fahrenheit');
        else
            setDegreeType('celsius');
    }

    const handleClick = async () => {
        setLoading(true);
        await getData();
        setLoading(false);
    }

    const getData = async () => {        
        weatherService.getWeather(searchValue).then(response => {
            setWeatherData(response)
        });

        weatherService.getForecast(searchValue).then(response => {
            setforecastData(response)
        });        
    }

    return (
        <>
            <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
                <div className="row">
                    <div className="col-12">
                        <h1>React Weather</h1>
                    </div>
                </div>
                <SearchBar handleChange={handleChange} handleClick={handleClick} />
                {loading && <Spinner />}
                {!loading && weatherData && <WeatherContainer weatherData={weatherData} handleUnitChange={handleUnitChange} degreeType={degreeType} />}
                {!loading && forecastData && <WeatherForecast forecastData={forecastData} degreeType={degreeType} />}
            </div>
        </>
    )
}


export { WeatherApp }