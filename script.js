let num1, num2, operator;

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
    case '+':
      return add([num1, num2]);
    case '-':
      return subtract([num1, num2]);
    case '*':
      return multiply([num1, num2]);
    case '/':
      return divide([num1, num2]);
    default:
      return 0;
  }
}
