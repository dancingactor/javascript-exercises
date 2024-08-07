const add = function(...numbers) {
	return numbers.reduce((acc, cur) => acc + cur);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(array) {
  return array.reduce((acc, cur) => acc * cur, 1);
};

const power = function(base, expo) {
  return Math.pow(base, expo);
};

const factorial = function(num) {
  let product = 1;
  for (let i = num; i > 1; i--) {
    product *= i;
  }
  return product;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
