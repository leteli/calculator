import replaceDefault, { isOperator } from './renderUtils.js';

const render = (state) => {
  const outputField = document.querySelector('.output-field');
  let result = '0';

  state.outputExpression.forEach((value, i) => {
    if (i === 0 && value === 'E') {
      result = '0';
    } else if (i === 0 && replaceDefault(value)) {
      result = value;
    } else if (isOperator(value)) {
      result = `${result} ${value} `;
    } else {
      result += value;
    }
  });

  if (state.resultValue !== null) {
    outputField.value = state.resultValue;
  } else {
    outputField.value = result;
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
}

export default render;