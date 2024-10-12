import PropTypes from "prop-types"
import { WeatherHighlights } from "./WeatherHighlights"
import { WeatherIcon } from './WeatherIcon'
import { Temperature } from "./Temperature";

function WeatherCurrent({ id, temp, main, location, degreeType }) {
    return (
        <div className="col-6">
            <div className="weather-container">
                <h5 className="py-3 px-5 text-d-blue">{location}</h5>
                <div className="d-flex px-5">
                    <WeatherIcon code={id} />
                    <span className="weather-value">
                        <Temperature degree={temp} degreeType={degreeType} /><sup>o</sup>
                    </span>
                </div>
                <h5 className="weather-description text-capitalize text-light-grey py-3 px-5">
                    {main}
                </h5>
            </div>
        </div>
    )
}

function WeatherContainer({ weatherData, handleUnitChange, degreeType }) {

    const { main, name, sys, weather, wind } = weatherData;

    return (
        <>
            <div className="container shadow p-3 bg-body-tertiary rounded">
                <div className="d-flex justify-content-between">
                    <p className="lead mt-2 mb-2 text-light-grey">Current Weather</p>
                    <div className="form-check form-switch text-light-grey lead">
                        <input
                            type="checkbox"
                            className="btn-check"
                            id="btn-check-outlined"
                            autoComplete="off"
                            onChange={handleUnitChange}
                        />
                        <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">
                            Fahrenheit
                        </label>
                    </div>
                </div>
                <div className="row">
                    {weather && <WeatherCurrent {...weather} temp={main.temp} location={name} degreeType={degreeType} />}
                    <WeatherHighlights windSpeed={wind.speed} {...main} degreeType={degreeType} />
                </div>
            </div>
        </>
    )
}


WeatherContainer.propTypes = {
    //weather: PropTypes.object,
    main: PropTypes.shape({
        feels_like: PropTypes.number,
        grnd_level: PropTypes.number,
        humidity: PropTypes.number,
        pressure: PropTypes.number,
        sea_level: PropTypes.number,
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number,
    }),
    name: PropTypes.string,
    sys: PropTypes.shape({
        country: PropTypes.string,
        sunrise: PropTypes.number,
        id: PropTypes.number,
        sunset: PropTypes.number,
        type: PropTypes.number,
    }),
    weather: PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
        id: PropTypes.number,
        main: PropTypes.string,
    }),
    wind: PropTypes.shape({
        deg: PropTypes.number,
        speed: PropTypes.number
    }),
    handleUnitChange: PropTypes.func
}

WeatherCurrent.propTypes = {
    id: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    description: PropTypes.string,
    location: PropTypes.string,
    degreeType: PropTypes.string
}

export { WeatherContainer }