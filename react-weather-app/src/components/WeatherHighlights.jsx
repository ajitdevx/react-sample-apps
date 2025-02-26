import HumidityIcon from '../assets/humidity-icon.svg'
import HighTempIcon from '../assets/high-icon.svg'
import LowTempIcon from '../assets/low-icon.svg'
import {Temperature} from './Temperature'

function WeatherHighlights({humidity, pressure, windSpeed, feels_like, temp_max, temp_min, degreeType}) {
    return (
        <div className="col-6">
            <h5 className="text-d-blue">
                Feels like <Temperature degree={feels_like} degreeType={degreeType} /><sup>o</sup>
            </h5>
            <div className="highlights-container">
                <div className="highlights p-3">
                    <span>
                        <HighTempIcon />
                    </span>
                    <span className="px-4 text-d-blue"><Temperature degree={temp_max} degreeType={degreeType} /><sup>o</sup></span>
                    <span>
                        <LowTempIcon />
                    </span>
                    <span className="px-4 text-d-blue"><Temperature degree={temp_min} degreeType={degreeType} /><sup>o</sup></span>
                </div>
                <div className="highlights p-3">
                    <span>
                        <HumidityIcon />
                    </span>
                    <span className="px-4 text-light-grey">Humidity</span>
                    <span className="text-d-blue">{humidity}%</span>
                </div>
                <div className="highlights p-3">
                    <span>
                        <HumidityIcon />
                    </span>
                    <span className="px-4 text-light-grey">Wind</span>
                    <span className="text-d-blue">{windSpeed}kph</span>
                </div>
                <div className="highlights p-3">
                    <span>
                        <HumidityIcon />
                    </span>
                    <span className="px-4 text-light-grey">Pressure</span>
                    <span className="text-d-blue">{pressure}hPa</span>
                </div>
            </div>
        </div>
    )
}


export { WeatherHighlights }