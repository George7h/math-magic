import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator Component', () => {
  it('renders without errors', () => {
    render(<Calculator />);
  });

  it('displays "0" initially in the display screen', () => {
    render(<Calculator />);
    const displayScreen = screen.getByTestId('displayScreen');
    expect(displayScreen).toHaveTextContent('0');
  });

  it('updates display when buttons are clicked', () => {
    render(<Calculator />);

    // Click some buttons
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    const displayScreen = screen.getByTestId('displayScreen');
    expect(displayScreen).toHaveTextContent('10');
  });

  it('handles the "AC" button correctly', () => {
    render(<Calculator />);

    // Click some buttons
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('AC'));

    const displayScreen = screen.getByTestId('displayScreen');
    expect(displayScreen).toHaveTextContent('0');
  });
});
