import operate from '../operate';

describe('Operate', () => {
  it('Returns the sum of two numbers', () => {
    expect(operate('5', '10', '+').toString()).toBe('15');
  });

  it('Returns the substraction of two numbers', () => {
    expect(operate('5', '8', '-').toString()).toBe('-3');
  });

  it('Returns the multiplication of two numbers', () => {
    expect(operate('5', '6', 'X').toString()).toBe('30');
  });

  it('Returns the division of two numbers', () => {
    expect(operate('5', '25', '÷').toString()).toBe('0.2');
  });

  it('Returns "Error" if any divison by zero is attempted', () => {
    expect(operate('85', '0', '÷')).toBe('Error');

    expect(operate('0', '0', '÷')).toBe('Error');

    expect(operate('-30', '0', '÷')).toBe('Error');
  });
});
