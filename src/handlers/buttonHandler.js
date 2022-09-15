import isOperator, { replaceDefault, minusHandler } from '../utils/utils.js';

const buttonHandler = (e, state) => {

  const rawValue = e.target.innerHTML;
  const buttonValue = isNaN(rawValue) ? rawValue : Number(rawValue);

  const output = state.outputExpression;
  const lastIndex = output.length - 1;
  const lastItem = output[lastIndex];

  if (buttonValue === '-') {
    minusHandler(state, buttonValue, lastIndex, lastItem);
    return;
  }

  const negativeNumCond = isOperator(output[lastIndex - 1]) || output[lastIndex - 1] === '(' || lastIndex === 0;
  if (lastItem === '-' && typeof buttonValue === 'number' && negativeNumCond) {
    output[lastIndex] = Number(`-${buttonValue}`);
    return;
  }

  if (output.length === 1 && output[0] === 0 && replaceDefault(buttonValue)) {
    output.pop();
    output.push(buttonValue);
    return;
  }

  if (output.length === 1 && output[0] === state.resultValue) {
    state.resultValue = null;
  }

  const uniteCond1 = buttonValue === '.' && typeof lastItem === 'number';
  const uniteCond2 = typeof buttonValue === 'number' && typeof lastItem === 'number';
  const uniteCond3 = typeof buttonValue === 'number' && typeof lastItem === 'string' && lastItem.endsWith('.');
  
  if (uniteCond1) {
    output[lastIndex] = `${lastItem}${buttonValue}`;
    return;
  }

  if (uniteCond2 || uniteCond3) {
    output[lastIndex] = Number(`${lastItem}${buttonValue}`);
    return;
  }

  const syntaxError1 = buttonValue === '.' && typeof lastItem === 'string' && lastItem.endsWith('.');
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
