import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalculatorComponent from './calculatorComponent';
import util from 'util'

// https://react-testing-library-examples.netlify.com/
//https://stackoverflow.com/questions/53003594/find-element-by-id-in-react-testing-library

test('Render CalculatorComponent', () => {
    const { calcComp } = render(<CalculatorComponent />);
    //console.log('util.inspect(calcComp)')
    //console.log(util.inspect(calcComp))
    const linkElement = getByText(/Faggruppe workshop/i);
    expect(linkElement).toBeInTheDocument();
});


test('Dumps CalculatorComponent', () => {
    //const HelloWorld = () => <h1>Hello World</h1>
    const { debug } = render(<CalculatorComponent />)
    //debug()
});

test('Render CalculatorComponent Find A', () => {
    const { getByTestId } = render(<CalculatorComponent />);
    const htmlElement = getByTestId("a");
    expect(htmlElement).toBeInTheDocument();
});

test('Render CalculatorComponent Find B', () => {
    const { getByTestId, debug } = render(<CalculatorComponent />);
    const htmlElement = getByTestId("b");
    fireEvent.change(htmlElement, { target: { value: 'Good Day' } })
    expect(htmlElement.value).toBe('Good Day')
    expect(htmlElement).toBeInTheDocument();
});

test('Render Calculation', () => {
    const { getByTestId, debug } = render(<CalculatorComponent />);
    
    const inputA = getByTestId("a");
    const inputb = getByTestId("b");
    const operator = getByTestId("operator");
    const submit = getByTestId("submit");    
   
    fireEvent.change(inputA, { target: { value: '3' } })
    fireEvent.change(inputb, { target: { value: '4' } })
    fireEvent.change(operator, { target: { value: '*' } })

    fireEvent.click(submit);
    
    const result = getByTestId("result");

    expect(result.value).toBe('12')

});