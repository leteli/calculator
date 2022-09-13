const buildPolishNotation = (arr) => {
  const priority = {
    '+': 1,
    '-': 1,
    '×': 2,
    '÷': 2,
    '**': 3,
  };

  let result = '';
  const operators = [];

  arr.forEach((el) => {
    if (el === '(') {
      operators.push(el); // если откр.скобка - добавляем к операторам
    } else if (el === ')') {
      // если закр.скобка - берем последний добавленный оператор
      const lastOp = operators.pop();
      while (lastOp !== '(') { // перебираем все операторы внутри скобок
        result += lastOp;
        lastOp = operators.pop(); // если там не скобка, идем на новую итерацию
      }
    } else if (typeof el === 'number' && !isNaN(el)) {
      result += el; // если число - добавляем в рез-т
    } else { // остаются операторы
      if (priority[el] <= operators[operators.length - 1]) {
      // проверяем, не отложен ли оператор с тем же приоритетом или выше
      result += operators.pop();
      } else {
        operators.push(el);
      }
    }
  });

  while (operators.length !== 0) { // проверяем, не осталось ли операций
    result += operators.pop();
  }

  return result;
};

export default buildPolishNotation;
