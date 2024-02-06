const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['add', 'subtract', 'multiply', 'divide'];

function add(arrNum) {
  return arrNum.reduce((prev, curr) => prev + curr, 0);
}

function subtract(arrNum) {
  return arrNum.reduce((prev, curr) => prev - curr);
}

function multiply(arrNum) {
  return arrNum.reduce((prev, curr) => prev * curr);
}

function divide(arrNum) {
  return arrNum.reduce((prev, curr) => prev / curr);
}

function operate(num1, num2, operator) {
  switch (operator) {
    case operators[0]:
      return add([num1, num2]);
    case operators[1]:
      return subtract([num1, num2]);
    case operators[2]:
      return multiply([num1, num2]);
    case operators[3]:
      return divide([num1, num2]);
    default:
      return 0;
  }
}
