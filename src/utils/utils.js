export const getFactorial = (num) => {
  if (num === 1) {
    return num;
  }
  return num * getFactorial(num - 1);
};

export const getTrigFn = (fnName) => {
  switch(fnName) {
    case 'sin':
      return Math.sin;
    case 'cos':
      return Math.cos;
    case 'tan':
      return Math.tan;
    case 'arcsin':
      return Math.asin;
    case 'arccos':
      return Math.acos;
    case 'arctan':
      return Math.atan;
  }
};

export const degToRad = (angle) => angle * (100 / Math.PI);

const isOperator = (value) => typeof value === 'string' && value.search(/\+|\-|\÷|\%|\×/g) !== -1;

export const replaceDefault = (value) => {
  const funcs = ['ln', 'log', '√', 'sin', 'arcsin', 'cos', 'arccos', 'tan', 'arctan'];
  const otherReplacingValues = ['('];
  if (funcs.includes(value)
    || otherReplacingValues.includes(value)
    || !isNaN(value)) {
      return true;
  }
  return false;
};

export const preventFloatingPoint = (num, precision) => parseFloat(num.toPrecision(precision));

export const percentToMul = (arr) => {
  return arr.map((el, i) => {
    if (el === '%') {
      return '×';
    }
    if (arr[i + 1] === '%') {
      return el / 100;
    }
    return el;
  });
};

export default isOperator;
