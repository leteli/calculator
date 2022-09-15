import { preventFloatingPoint } from './utils.js';

const calcInPolishNotation = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const result = [];
  arr
  .map((el) => isNaN(el) ? el : Number(el))
  .forEach((el) => {
    console.log(el);
    if (!isNaN(el)) {
      result.push(el);
    } else {
      const secondNum = result.pop();
      const firstNum = result.pop();
      switch(el) {
        case '+':
          result.push(preventFloatingPoint(firstNum + secondNum, 9));
          break;
        case '-':
          result.push(preventFloatingPoint(firstNum - secondNum, 9));
          break;
        case '×':
          result.push(preventFloatingPoint(firstNum * secondNum, 9));
          break;
        case '÷':
          result.push(preventFloatingPoint(firstNum / secondNum, 9));
          break;
        case '^':
          result.push(preventFloatingPoint(firstNum ** secondNum, 9));
          break;
      }
    }
  });

  console.log(result);

  if (result.length !== 1 || isNaN(result[0])) {
    return 'Error!';
  }

  return result[0];
};

export default calcInPolishNotation;
