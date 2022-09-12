  const buttonValues = [
    'Rad', 'x!', '%', '(', ')',
    'Deg', 'sin', 'ln', 7, 8, 9, '÷',
    'Inv', 'cos', 'log',  4, 5, 6, '×',
    'π', 'tan', '√', 1, 2, 3, '-',
    'e', 'EXP', 'xⁿ', 0, '.', '=', '+',
  ];
  const operators = /\+|\-|\÷|\%|\×|\!/g;

const buttonHandler = (e, state) => {
  const buttonValue = e.target.innerHTML;
  const output = state.outputExpression;
  const lastIndex = output.length - 1;
  if (typeof buttonValue === 'number' && typeof output[lastIndex] === 'number') {
    output[lastIndex] = Number(`${output[lastIndex]}${buttonValue}`);
    return;
  }
  switch(buttonValue) {
    case 'Rad':
    case 'Deg':
      state.angleUnit = value;
      break;
    case 'Inv':
      state.isInverted = !state.isInverted;
      break;
    case 'x!':
      output.push('!');
      break;
    case 'EXP':
      output.push('E');
      break;
    case 'xⁿ':
      output.push('**');
      break;
    default:
      output.push(value);
      break;
  }
};

export default buttonHandler;
