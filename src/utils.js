// const showValueAsFirst = (value) => {
//   const funcs = ['ln', 'log', 'sqrt', 'sin', 'cos', 'tan'];
//   const otherReplacingValues = ['-', '(', 'e', 'π'];
//   if (funcs.includes(value)
//     || otherReplacingValues.includes(value)
//     || typeof value === 'number') {
//       return value;
//   }
//   if (value === 'EXP') {
//     return null;
//   }
// };

// const buttonValues = [
//   'Rad', 'x!', '%', '(', ')',
//   'Deg', 'sin', 'ln', 7, 8, 9, '÷',
//   'Inv', 'cos', 'log',  4, 5, 6, '×',
//   'π', 'tan', '√', 1, 2, 3, '-',
//   'e', 'EXP', 'xⁿ', 0, '.', '=', '+',
// ];
// const operators = /\+|\-|\÷|\%|\×|\!/g;

// // const funcs = ['ln', 'log', 'sqrt', 'sin', 'cos', 'tan']
// // 

// // они ведут себя с дефолтным нулем ИНАЧЕ, чем с другими значениями
// // const replaceDefault = ['-', '(', numbers, funcs, pi, e, ]; // заменяют ноль. Сделать нормой поведения! 
// // const doNothingwDefault = 'EXP' // ничего не делает
// // ведут себя так же: Rad/Deg, Inv, x! x**n, ')', '.', '%', '+', '*', '/' 


// // const handleRegularOutput(')');
// // еще! поведение перед теми или иными знаками может отличаться (перед операторами например)

// const getEndBracketOutput = (output) => {
// let newOutput = output;
// // условия
// return newOutput;
// };

// const noSpaceChars = buttonValues
// .filter((value) => typeof value === 'string'
//   && value.search(/\.|\%|\(/g) !== -1)
// .concat('e', 'π');


// const buttonHandler = (e, state) => { // value = buttonValue
// const value = e.target.innerHTML;
// const output = state.outputExpression;
// switch(value) {
//   case 'Rad':
//   case 'Deg':
//     state.angleUnit = value;
//     return;
//   case 'Inv':
//     state.isInverted = !state.isInverted;
//     return;
//   case 'x!':
//     output = `${output}${value[1]}`;
//     return; //  ПРОДУМАТЬ КЕЙС ЕСЛИ СТАВИТСЯ ПЕРЕД ДРУГИМ ОПЕРАТОРОМ
// }

// if (output === null) {
//   output = showValueAsFirst(value);
// }
// if (noSpaceChars.includes(value) || typeof value === 'number') {
//   output = `${output}${value}`; // без пробела
// }
// if (value === ')') {
//   output = getEndBracketOutput(output);
// }
// if (value === 'EXP') {
//   output = `${output}${value[0]}`; // EXP -> E
// }
// if (value === 'xⁿ') {
//   output = `${output} **`;
// }
// output = `${output} ${value}`; // стандартный сценарий
// };


// export default showValueAsFirst;
export const getFactorial = (num) => {
  if (num === 1) {
    return num;
  }
  return num * getFactorial(num - 1);
};

const getTrigFn = (fnName) => {
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

export default getTrigFn;
