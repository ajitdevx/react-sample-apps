
function kelvinToCelsius(n) {
    return Math.round(n - 273.15);
}

function celsiusToFahrenheit(n) {
    return Math.round((n * 9 / 5) + 32);
}

function fahrenheitToCelsius(n) {
    return Math.round((n - 32) * 5 / 9);
}

function kmToMile(n) {
    return Math.round(n / 1.60934);
  }
  
function mileToKm(n) {
    return Math.round(n * 1.60934);
  }

export { kelvinToCelsius, celsiusToFahrenheit, fahrenheitToCelsius, kmToMile, mileToKm }