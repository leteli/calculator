import buildPolishNotation from '../utils/buildPolishNotation.js';
import calcInPolishNotation from '../utils/calcInPolishNotation.js';

const equalsHandler = (e, state) => {
  const outputInRPN = buildPolishNotation(state.outputExpression);
  const result = calcInPolishNotation(outputInRPN);
  state.resultValue = result;
  state.outputExpression = [result];
};

export default equalsHandler;
