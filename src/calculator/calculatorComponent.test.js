import React from 'react';
import { render } from '@testing-library/react';
import CalculatorComponent from './calculatorComponent';
import util from 'util'

test('Render CalculatorComponent', () => {
    const { calcComp } = render(<CalculatorComponent />);
    console.log('util.inspect(calcComp)')
    console.log(util.inspect(calcComp))
    //const linkElement = getByText(/Faggruppe workshop/i);
    //expect(linkElement).toBeInTheDocument();
});
