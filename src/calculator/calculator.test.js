import calculate, {errormessages} from './calculator'


describe('TestCalculator', () => {
  
  test('To pluss to', () => {    
    let res = calculate(2, '+', 2)
    expect(res).toBe(4)
  })

  test('Blank operator', () => {
    const t = () => {
      calculate(2, '', 2)
    };       
    expect(t).toThrow(Error)    
  })

  test('Blank operator', () => {
    const t = () => {
      calculate(2, '', 2)
    };       
    expect(t).toThrow(errormessages.NOOPERATOR)    
  })

  test('Blank operator v2', () => {
    expect(()=> calculate('2', '', 2)).toThrow(Error)   
  })
  

})