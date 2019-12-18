import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App', () => {
  const { container } = render(<App />);
  expect(container.children.length).toBe(1);
});

test('renders Todo', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('App');
  expect(app.children.length).toBe(1);
});
