function add(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

function subtract(numbers) {
  return numbers.reduce((prev, curr) => prev - curr);
}

function multiply(numbers) {
  return numbers.reduce((prev, curr) => prev * curr);
}

function divide(numbers) {
  return numbers.reduce((prev, curr) => prev / curr);
}
