const clearHandler = ({ target }, state) => {
  const buttonValue = target.innerHTML;
  if (buttonValue === 'AC') {
    state.outputExpression = [0];
    state.resultValue = null;
  } else {
    state.outputExpression.pop();
    if (state.outputExpression.length === 0) {
      state.outputExpression = [0];
    }
  }
};


export default clearHandler;
