import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('displays hello world from core', () => {
    render(<App />);

    expect(screen.getByText('Hello World from Core')).toBeInTheDocument();
  });
})