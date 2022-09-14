const calcInPolishNotation = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const result = [];
  arr
  .map((el) => isNaN(el) ? el : Number(el))
  .forEach((el) => {
    if (!isNaN(el)) {
      result.push(el);
    } else {
      const secondNum = result.pop();
      const firstNum = result.pop();
      switch(el) {
        case '+':
          result.push(firstNum + secondNum);
          break;
        case '-':
          result.push(firstNum - secondNum);
          break;
        case '×':
          result.push(firstNum * secondNum);
          break;
        case '÷':
          result.push(firstNum / secondNum);
          break;
      }
    }
  });

  if (result.length !== 1) {
    return 'Error!';
  }

  return result[0];
};

export default calcInPolishNotation;
