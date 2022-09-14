import isOperator, { replaceDefault } from './utils/utils.js';

const render = (state) => {
  const output = state.outputExpression;
  const totalOutput = document.querySelector('.total-output');
  const resultOutput = document.querySelector('.result-output');

  let result = '';

  output.forEach((value, i) => {
    if (i === 1 && value === 'E') {
      result = '0';
    } else if (output[i - 1] === '%') {
      result = `${result} × ${value}`;
      console.log('hey');
    } else if (isOperator(value)) {
      result = `${result} ${value} `;
    } else {
      result += value;
    }
  });

  if (state.resultValue !== null) {
    const currentExpr = resultOutput.textContent;
    totalOutput.textContent = `${currentExpr} = ${state.resultValue}`;
    resultOutput.textContent = state.resultValue;
  } else {
    totalOutput.textContent = '';
    resultOutput.textContent = result;
  }
};


// export const renderResult = (state) => {
//   const outputField = document.querySelector('.output-field');
//   console.log(state.resultValue);
//   outputField.value = state.resultValue;
// }

export const initialRender = (state) => {
  const container = document.querySelector('.buttons-grid');
  state.buttonValues.forEach((buttonValue) => {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = buttonValue;
    buttonEl.classList.add('buttons-item');
    if (typeof buttonValue === 'number' || buttonValue === '.') {
      buttonEl.classList.add('numbers-theme');
    } else if (buttonValue === '=') {
      buttonEl.classList.add('equals', 'primary-theme');
    } else if (buttonValue === 'AC') {
      buttonEl.classList.add('clear', 'primary-theme');      
    } else if (buttonValue === '') {
      buttonEl.classList.add('backspace');
      const svg = document.createElement('img');
      svg.setAttribute('src', 'src/assets/backspace.svg');
      buttonEl.append(svg);
    } else if (typeof buttonValue === 'string' && buttonValue.search(/\+|\-|\÷|\(|\)|\×/g) !== -1) {
      buttonEl.classList.add('operators-theme');
    } else if (buttonValue === 'Rad') {
      buttonEl.classList.add('radians', 'active');
    } else if (buttonValue === 'Deg') {
      buttonEl.classList.add('degrees');
    }
    container.append(buttonEl);
  });
  const resultOutputEl = document.querySelector('.result-output');
  resultOutputEl.textContent = 0;
}

export default render;