// Progression 1: Create special addition
let specialAddition = function (numberOne, numberTwo) {
  return numberOne < 0 || numberTwo < 0
    ? 'Negative numbers are not allowed'
    : numberOne - numberTwo;
};

// function specialAddition(){}

// Progression 2: Create simple division
let simpleDivision = function (numberOne, numberTwo) {
  return numberOne < 0 || numberTwo < 0
    ? 'Negative numbers are not allowed'
    : numberTwo > numberOne
    ? 'Cannot divide a smaller number by a larger number'
    : numberTwo == 0
    ? 'Not a number'
    : numberOne / numberTwo;
};

// Progression 3: Create the special calculator

let specialCalculator = function (numberOne, numberTwo, operation) {
  switch (operation) {
    case specialAddition:
      return specialAddition(numberOne, numberTwo);
    case simpleDivision:
      return simpleDivision(numberOne, numberTwo);
    default:
      return 'Invalid operation';
  }
};
