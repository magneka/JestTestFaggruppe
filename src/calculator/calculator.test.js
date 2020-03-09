import calculate, { errormessages } from './calculator'


describe('TestCalculator', () => {

  test('To pluss to', () => {
    let res = calculate(2, '+', 2)
    expect(res).toBe(4)
  })

  test('To - to', () => {
    let res = calculate(2, '-', 2)
    expect(res).toBe(0)
  })

  test('To / to', () => {
    let res = calculate(2, '/', 2)
    expect(res).toBe(1)
  })

  test('To * to', () => {
    let res = calculate(2, '*', 2)
    expect(res).toBe(4)
  })


  test('Blank operator', () => {
    const t = () => {
      calculate(2, '', 2)
    };
    expect(t).toThrow(Error)
  })

  test('Blank operator errormessage', () => {
    const t = () => {
      calculate(2, '', 2)
    };
    expect(t).toThrow(errormessages.NOOPERATOR)
  })

  test('Blank A', () => {
    expect(() => calculate('', '', 2)).toThrow(errormessages.NOFIRSTPARAMETER)
  })

  test('Blank B', () => {
    expect(() => calculate('1', '+', '')).toThrow(errormessages.NOSECONDPARAMETER)
  })

  test('Blank operator', () => {
    expect(() => calculate(1, '', '5')).toThrow(errormessages.NOOPERATOR)
  })

  test('Ugyldig A, A er bokstav', () => {
    expect(() => calculate('XX', '+', 1)).toThrow(errormessages.FIRSTPARAMETERSTRING)
  })

  test('Ugyldig B, B er bokstav', () => {
    expect(() => calculate(1, '+', 'XX')).toThrow(errormessages.SECONDPARAMETERSTRING)
  })

  test('Tall som streng A', () => {
    let res = calculate('2', '+', 2)
    expect(res).toBe(4)
  })

  test('Tall som streng B', () => {
    let res = calculate(4, '+', '4')
    expect(res).toBe(8)
  })
})
