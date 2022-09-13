// import getTrigFn, { getFactorial, degToRad, isOperator } from '../utils.js';
import buildPolishNotation from '../buildPolishNotation.js';
import calcInPolishNotation from '../calcInPolishNotation.js';
// продумать приоритет операторов

const equalsHandler = (e, state) => {
  const outputInRPN = buildPolishNotation(state.outputExpression);
  const result = calcInPolishNotation(outputInRPN);

  state.resultValue = result;
  state.outputExpression = [result];
};

export default equalsHandler;

// проблемы с числами с плавающей точкой