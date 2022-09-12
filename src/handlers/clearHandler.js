const clearHandler = ({ target }, state) => {
  const buttonValue = target.innerHTML;
  buttonValue === 'AC' ? state.outputExpression = [null]
     : state.outputExpression.pop();
};


export default clearHandler;
