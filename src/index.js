import render, { initialRender } from './view.js';
import buttonHandler from "./handlers/buttonHandler.js";
import equalsHandler from "./handlers/equalsHandler.js";
import clearHandler from "./handlers/clearHandler.js";

const app = () => {

  const state = {
    buttonValues: [
      '%', '(', ')', '', 'AC',
      'x!', 7, 8, 9, '÷',
      'xⁿ',  4, 5, 6, '×',
      '√', 1, 2, 3, '-',
      'EXP', 0, '.', '=', '+',
    ],
    outputExpression: [0],
    default: true,
    resultValue: null,
    isInverted: false,
    angleUnit: 'Rad',
  }

  initialRender(state);

  const buttons = document.getElementsByClassName('buttons-item');
  Array.from(buttons).forEach((button) => {
    const { classList } = button;
    const currentHandler = classList.contains('equals') ? equalsHandler
      : classList.contains('clear') ||  classList.contains('backspace') ? clearHandler
      : buttonHandler;

    const handlingEvents = ['click', 'keydown'];
    
    handlingEvents.forEach((eventType) => button
      .addEventListener(eventType, (e) => {
        currentHandler(e, state);
        render(state);
      }));
  });
};

app();

export default app;
