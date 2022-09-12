import render from './view.js';
import buttonHandler from "./handlers/buttonHandler.js";
import equalsHandler from "./handlers/equalsHandler.js";
import clearHandler from "./handlers/clearHandler.js";

const app = () => {
  const state = {
    outputExpression: [null],
    resultValue: '',
    isInverted: false,
    angleUnit: 'Rad',
  }

  const buttons = document.getElementByClassName('buttons-item');
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

export default app;
