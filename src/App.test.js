import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import util from 'util'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  console.log(util.inspect(getByText))
  const linkElement = getByText(/Faggruppe workshop/i);
  expect(linkElement).toBeInTheDocument();
});
