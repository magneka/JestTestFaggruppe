import React from 'react';
import { render } from '@testing-library/react';
import CalculatorComponent from './calculatorComponent';

it('Calculatorcomponent snapshot test', () => {
    const container = render(<CalculatorComponent />)
    expect(container.baseElement).toMatchSnapshot()    
});