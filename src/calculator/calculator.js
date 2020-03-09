const errormessages = {
  NOOPERATOR: 'No Operator',  
  NOFIRSTPARAMETER: 'First parameter empty',  
  NOSECONDPARAMETER: 'Second parameter empty',  
  FIRSTPARAMETERSTRING: 'First is not a valid number',
  SECONDPARAMETERSTRING: 'Second parameter is not a valid number',    
  DIVIDEBYZERO: 'Divide by zero is illegal',    
}

function calculate(a, operator, b) {
  if (a === '')
    throw new Error(errormessages.NOFIRSTPARAMETER)
  else if (b === '')
    throw new Error(errormessages.NOSECONDPARAMETER)
  if (!a)
    throw new Error(errormessages.FIRSTPARAMETERSTRING)
  else if (!b)
    throw new Error(errormessages.SECONDPARAMETERSTRING)
  else if (isNaN(a))
    throw new Error(errormessages.FIRSTPARAMETERSTRING)
  else if (isNaN(b))
    throw new Error(errormessages.SECONDPARAMETERSTRING)
  
  if (operator === '+')
    return add(Number(a), Number(b))
  else if (operator === '-')
    return subtract(Number(a), Number(b))
  else if (operator === '/') {
    if(b == 0)
      throw new Error(errormessages.DIVIDEBYZERO)
    
    return divide(Number(a), Number(b))
  }
  else if (operator === '*')
    return multiply(Number(a), Number(b))
  
  throw new Error(errormessages.NOOPERATOR)
}
  
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const divide = (a, b) => a / b
const multiply = (a, b) => a * b

export {calculate as default, errormessages}