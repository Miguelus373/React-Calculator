import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../Calculator';

const clickButton = regexp => userEvent.click(screen.getByText(regexp), { button: 0 });

beforeEach(() => {
  render(<Calculator />);
});

describe('Calculator component', () => {
  it('Renders correctly', () => {
    expect(screen.getByText(/Let’s do some math!/)).toBeInTheDocument();
  });

  it('Displays 0 as the initial value', () => {
    expect(screen.getAllByText(/0/)).toHaveLength(2);
  });

  it('Updates the display when a number is clicked', () => {
    clickButton(/3/);
    clickButton(/7/);

    expect(screen.getByText(/37/)).toBeInTheDocument();
  });

  it('Displays the operation sign just clicked', () => {
    clickButton(/5/);
    clickButton(/÷/);

    expect(screen.getAllByText(/÷/)).toHaveLength(2);
  });

  it('Changes the sign of displayed number when "+/-" is clicked', () => {
    clickButton(/6/);
    clickButton(/4/);
    clickButton(/\+\/-/);

    expect(screen.getByText(/-64/)).toBeInTheDocument();
  });

  it('Converts the displayed number into a percentage when "%" is clicked', () => {
    clickButton(/3/);
    clickButton(/6/);
    clickButton(/0/);
    clickButton(/%/);

    expect(screen.getByText(/3.6/)).toBeInTheDocument();
  });

  it('Sets the current number to 0 when "AC" is clicked', () => {
    clickButton(/5/);
    clickButton(/2/);
    clickButton(/AC/);

    expect(screen.getAllByText(/0/)).toHaveLength(2);
  });

  it('Performs the operation and displays result when "=" is clicked', () => {
    clickButton(/3/);
    clickButton(/X/);
    clickButton(/7/);
    clickButton(/=/);

    expect(screen.getByText(/21/)).toBeInTheDocument();
  });

  it('Chains operations', () => {
    clickButton(/8/);
    clickButton(/÷/);
    clickButton(/2/);
    clickButton(/X/);
    clickButton(/5/);
    clickButton(/=/);

    expect(screen.getByText(/20/)).toBeInTheDocument();
  });

  it('Displays "Error" when a division by 0 is attempted', () => {
    clickButton(/6/);
    clickButton(/÷/);
    clickButton(/0/);
    clickButton(/=/);

    expect(screen.getByText(/Error/)).toBeInTheDocument();
  });
});
