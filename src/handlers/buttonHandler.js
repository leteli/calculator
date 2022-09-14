import isOperator from '../utils/utils.js';

const buttonHandler = (e, state) => {

  const rawValue = e.target.innerHTML;
  const buttonValue = isNaN(rawValue) ? rawValue : Number(rawValue);

  const output = state.outputExpression;
  const lastIndex = output.length - 1;
  const lastItem = output[lastIndex];

  const uniteCond1 = typeof buttonValue === 'number' && typeof lastItem === 'number';
  const uniteCond2 = buttonValue === '.' && typeof lastItem === 'number';
  const uniteCond3 = typeof buttonValue === 'number' && lastItem === '.';
  
  if (uniteCond1 || uniteCond2 || uniteCond3) {
    output[lastIndex] = Number(`${lastItem}${buttonValue}`);
    return;
  }

  if (lastItem === '%') {
    output[lastIndex] = '×';
    output[lastIndex + 1] = buttonValue / 100;
    return;
  }

  const syntaxError1 = buttonValue === '.' && lastItem === '.';
  const syntaxError2 = buttonValue === 0 && lastItem === 0;
  const syntaxError3 = isOperator(buttonValue) && isOperator(lastItem);

  if (syntaxError1 || syntaxError2 || syntaxError3) {
    return 'Error!';
  }

  switch(buttonValue) {
    case 'Rad':
    case 'Deg':
      state.angleUnit = buttonValue;
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
    case 'π':
      output.push(Math.PI);
      break;
    case 'e':
      output.push(Math.E);
      break;
    default:
      output.push(buttonValue);
      break;
  }
};

export default buttonHandler;
