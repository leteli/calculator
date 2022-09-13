const buildPolishNotation = (arr) => {
  const priority = {
    '+': 1,
    '-': 1,
    '×': 2,
    '÷': 2,
    '**': 3,
  };

  let result = [];
  const operators = [];

  arr.forEach((el) => {
    if (el === '(') {
      operators.push(el); // если откр.скобка - добавляем к операторам
    } else if (el === ')') {
      // если закр.скобка - берем последний добавленный оператор
      let lastOp = operators.pop();
      while (lastOp !== '(') { // перебираем все операторы внутри скобок
        result.push(lastOp);
        lastOp = operators.pop(); // если там не скобка, идем на новую итерацию
      }
    } else if (typeof el === 'number' && !isNaN(el)) {
      result.push(el); // если число - добавляем в рез-т
    } else { // остаются операторы
      while (priority[el] <= priority[operators[operators.length - 1]]) {
      // проверяем, не отложен ли оператор с тем же приоритетом или выше
        result.push(operators.pop());
      }
      operators.push(el);
    }
  });

  while (operators.length > 0) { // проверяем, не осталось ли операций
    result.push(operators.pop());
  }
  console.log(result);
  return result;
};

export default buildPolishNotation;
