const errormessages = {
  NOOPERATOR: 'No Operator',  
}

function calculate (a, operator, b) {
  if (operator === '+')
    return add(a, b)
  
  throw new Error(errormessages.NOOPERATOR)
}
  
const add = (a, b) => a + b

export {calculate as default, errormessages}