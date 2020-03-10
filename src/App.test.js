import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import util from 'util'

test('renders app', () => {
  const { getByText } = render(<App />);
  console.log(util.inspect(getByText))
  const linkElement = getByText(/Faggruppe workshop/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders hello', () => {
  const HelloWorld = () => <h1>Hello World</h1>
  const { debug } = render(<HelloWorld />)
  debug()
});

