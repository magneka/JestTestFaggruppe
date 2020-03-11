import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import CalculatorComponent from './calculatorComponent';
import util from 'util'

// https://react-testing-library-examples.netlify.com/
//https://stackoverflow.com/questions/53003594/find-element-by-id-in-react-testing-library

test('Render CalculatorComponent', () => {
    const { getByText } = render(<CalculatorComponent />);
    const linkElement = getByText(/Faggruppe workshop/i);
    expect(linkElement).toBeInTheDocument();
});

test('Dumps CalculatorComponent', () => {
    const { debug } = render(<CalculatorComponent />)
    debug()
});

test('Render CalculatorComponent Find A', () => {
    const { getByTestId } = render(<CalculatorComponent />);
    const htmlElement = getByTestId("a");
    expect(htmlElement).toBeInTheDocument();
});

test('Render CalculatorComponent Find B', () => {
    const { getByTestId } = render(<CalculatorComponent />);
    const htmlElement = getByTestId("b");
    fireEvent.change(htmlElement, { target: { value: 'Good Day' } })
    expect(htmlElement.value).toBe('Good Day')
    expect(htmlElement).toBeInTheDocument();
});

test('Render Calculation multiply', () => {
    const { getByTestId } = render(<CalculatorComponent />);
    
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

test('Render Calculation divide', () => {
    const { getByTestId } = render(<CalculatorComponent />);

    const inputA = getByTestId("a");
    const inputb = getByTestId("b");
    const operator = getByTestId("operator");
    const submit = getByTestId("submit");

    fireEvent.change(inputA, { target: { value: '8' } })
    fireEvent.change(inputb, { target: { value: '4' } })
    fireEvent.change(operator, { target: { value: '/' } })

    fireEvent.click(submit);

    const result = getByTestId("result");

    expect(result.value).toBe('2')
});

test('Render Calculation add', () => {
    const { getByTestId } = render(<CalculatorComponent />);

    const inputA = getByTestId("a");
    const inputb = getByTestId("b");
    const operator = getByTestId("operator");
    const submit = getByTestId("submit");

    fireEvent.change(inputA, { target: { value: '3' } })
    fireEvent.change(inputb, { target: { value: '4' } })
    fireEvent.change(operator, { target: { value: '+' } })

    fireEvent.click(submit);

    const result = getByTestId("result");

    expect(result.value).toBe('7')
});

test('Render Calculation subtract', () => {
    const { getByTestId, debug } = render(<CalculatorComponent />);

    fireEvent.change(getByTestId("a"), { target: { value: '8' } })
    fireEvent.change(getByTestId("b"), { target: { value: '3' } })
    fireEvent.change(getByTestId("operator"), { target: { value: '-' } })
    fireEvent.click(getByTestId("submit"));

    expect(getByTestId("result").value).toBe('5')
    debug()
});