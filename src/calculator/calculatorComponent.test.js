import React from 'react';
import { render, getAllByTestId, getByTestId } from '@testing-library/react';
import CalculatorComponent from './calculatorComponent';
import util from 'util'

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
    const { getByTestId } = render(<CalculatorComponent />);
    const htmlElement = getByTestId("b");
    htmlElement.se
    expect(htmlElement).toBeInTheDocument();
});