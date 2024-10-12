import PropTypes from 'prop-types'
import { celsiusToFahrenheit } from "../_helpers/unit-conversion";


function Temperature({ degree, degreeType }) {

    if (degreeType == 'fahrenheit')
        return <>{celsiusToFahrenheit(degree)}</>;

    return <>{degree}</>;
}

export { Temperature }

Temperature.propTypes = {
    degree: PropTypes.number,
    degreeType: PropTypes.string
}