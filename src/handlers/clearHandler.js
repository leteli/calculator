const clearHandler = ({ target }, state) => {
  const buttonValue = target.innerHTML;
  const output = state.outputExpression;
  const lastIndex = output.length - 1;
  const lastItem = output[lastIndex];
  if (buttonValue !== 'AC' && typeof lastItem === 'number' && lastItem.toString().length > 1) {
    const rest = lastItem.toString().slice(0, -1);
    output[lastIndex] = isNaN(rest) ? rest : Number(rest);
  } else if (buttonValue === 'AC' || state.outputExpression.length === 1) {
    state.outputExpression = [0];
    state.resultValue = null;
  } else {
    output.pop();
  }
};


export default clearHandler;
