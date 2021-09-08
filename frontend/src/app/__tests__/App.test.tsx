import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('displays hello world', () => {
    render(<App />);

    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
  });
})