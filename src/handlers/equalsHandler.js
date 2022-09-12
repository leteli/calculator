import getTrigFn, { getFactorial, degToRad } from '../utils.js';

const equalsHandler = (e, state) => {
  let skippedValue;

  const getAngle = (value) => state.angleUnit === 'Rad' ? value : degToRad(value);

  state.outputExpression.reduce((prevValue, value, i) => {
    if (Array.isArray(value)) {
      equalsHandler(value);
    }

    const nextValue = state.outputExpression[i + 1];

    if (typeof value !== 'number' && value !== '!') { // включая PI, E
      skippedValue = nextValue;
    }

    switch(value) {
      case skippedValue:
        return prevValue;
      case '+':
        return prevValue + nextValue;
      case '-':
        return prevValue - nextValue;
      case '×':
        return prevValue * nextValue;
      case '÷':
        return prevValue * nextValue;
      case '%':
        return (nextValue / 100) * prevValue;
      case '**':
        return prevValue ** nextValue;
      case '!':
        return getFactorial(prevValue);
      case 'E':
        return prevValue * (10 ** nextValue);
      case 'log':
        return Math.log10(nextValue);
      case 'ln':
        return Math.log(nextValue);
      case '√':
        return Math.sqrt(nextValue);
      case 'sin':
      case 'arcsin':
      case 'cos':
      case 'arccos':
      case 'tan':
      case 'arctan':
        const currentFn = getTrigFn(value);
        return currentFn(getAngle(nextValue));
      case Math.E:
      case Math.PI:
        return prevValue * value;
    }
  });
};

export default equalsHandler;

// польская запись?
// проблемы с числами с плавающей точкой