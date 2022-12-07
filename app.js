const add = (a, b) => {
  let result = a + b;
  return result;
};

const subtract = (num1, num2) => {
  let result = num1 - num2;
  return result;
};

const multiply = (num1, num2) => {
  let result = num1 * num2;
  return result;
};

// add(2, 3);
// add(0, 0);
let myArray = ["Dan", "Stuart", "Ben"];

module.exports = { add, subtract, multiply, myArray };
