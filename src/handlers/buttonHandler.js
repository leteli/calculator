import isOperator, {
  replaceDefault,
  minusHandler,
  closingBracketHandler,
} from '../utils/utils.js';

const buttonHandler = (e, state) => {
  const rawValue = e.target.innerHTML;
  const buttonValue = isNaN(rawValue) ? rawValue : Number(rawValue);

  const lastIndex = state.outputExpression.length - 1;
  const lastItem = state.outputExpression[lastIndex];

  if ((state.outputExpression.length === 1 && lastItem === state.resultValue)) {
    state.resultValue = null;
  }

  if (lastItem === 'Error!') {
    state.outputExpression = [0];
  }

  const output = state.outputExpression;

  if (buttonValue === '-') {
    minusHandler(state, lastIndex, lastItem);
    state.default = false;
    return;
  }

  if (state.default) {
    state.default = false;
  }

  const negativeNumCond = isOperator(output[lastIndex - 1]) || output[lastIndex - 1] === '(' || lastIndex === 0;
  if (lastItem === '-' && typeof buttonValue === 'number' && negativeNumCond) {
    output[lastIndex] = Number(`-${buttonValue}`);
    return;
  }

  if (buttonValue === ')') {
    closingBracketHandler(state, lastItem);
    return;
  }

  if (output.length === 1 && output[0] === 0 && replaceDefault(buttonValue)) {
    output.pop();
    output.push(buttonValue);
    return;
  }

  if (lastItem === '√') {
    output[lastIndex] = `√${buttonValue}`;
    return;
  }

  if (typeof lastItem === 'string' && lastItem.startsWith('√') && typeof buttonValue === 'number') {
    output[lastIndex] += buttonValue;
    return;
  }

  if (buttonValue === 'EXP' && lastItem === 0) {
    return;
   }

  if (buttonValue === 'EXP' && lastItem !== 0) {
   output[lastIndex] += 'E';
   return;
  }

  if (typeof lastItem === 'string' && lastItem.endsWith('E')) {
    output[lastIndex] += buttonValue;
    return;
  }

  if (buttonValue === 'x!') {
    output[lastIndex] += '!'; 
    return;
  }

  if (buttonValue === 'xⁿ') {
    output.push('^');
    return;
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

  output.push(buttonValue); // default!
};

export default buttonHandler;
