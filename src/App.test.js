import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import util from 'util'

test('renders app with header', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText("Faggruppe workshop");
  expect(linkElement.length).toBe(1);
});

test('renders hello', () => {
  const HelloWorld = () => <h1>Hello World</h1>
  const { debug } = render(<HelloWorld />)
  //debug()
});

