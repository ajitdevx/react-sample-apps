import { WeatherIcon } from './WeatherIcon'
import {Temperature} from './Temperature'

function WeatherForecast(props) {
    const forecasts = props.forecastData;
    const degreeType = props.degreeType;

    return (
        <>
            <div className="container shadow p-3 mb-5 bg-body-tertiary rounded forcast-container">
                <div className="d-flex justify-content-between p-0">
                    <p className="lead mt-2 mb-2">Extended Forecast</p>
                </div>
                <div className="d-flex d-flex-column justify-content-between text-center">
                    {
                        forecasts && forecasts.map(forecast => (
                            <div key={forecast.day} className="forcast">
                                <div className="day">{forecast.day}</div>
                                <WeatherIcon code={forecast.weather.id} />
                                <div className="weather-info">{forecast.weather.main}</div>
                                <div className="temp-high-low">
                                    <Temperature degree={forecast.temp.tempMax} degreeType={degreeType} /><sup>o</sup>
                                     /<Temperature degree={forecast.temp.tempMin} degreeType={degreeType} /><sup>o</sup>
                                     </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>

        </>
    )
}

export { WeatherForecast }