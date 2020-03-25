import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders RICKLEAPP', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/RICKLEAPP/i);
  expect(linkElement).toBeInTheDocument();
});
