const clearHandler = ({ target }, state) => {
  const buttonValue = target.innerHTML;
  if (buttonValue === 'AC') {
    state.outputExpression = [];
    state.resultValue = null;
  } else {
    state.outputExpression.pop();
  }
};


export default clearHandler;
