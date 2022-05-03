import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('main sections should be rendered', () => {
  test('renders LED', () => {
    render(<App />);

    const header = screen.getByText(/Logical Expression Builder/i);

    expect(header).toBeInTheDocument();
  });

  test('renders CC', () => {
    render(<App />);

    const header = screen.getByText(/Constants Creator/i);

    expect(header).toBeInTheDocument();
  });
})

