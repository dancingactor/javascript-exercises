const convertToCelsius = function(Fahrenheit) {

  return Math.round((Fahrenheit - 32) * (5 / 9) * 10) / 10

};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
