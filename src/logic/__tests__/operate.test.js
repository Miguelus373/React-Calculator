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

  it('Doesn\'t return positive in a sum of two negatives', () => {
    expect(parseInt(operate('-43', '-13', '+'), 10)).not.toBeGreaterThan(0);
  });

  it('Doesn\'t return negative in a multiplication of two negatives', () => {
    expect(parseInt(operate('-7', '-4', 'X'), 10)).not.toBeLessThan(0);
  });

  it('Returns "Error" if any divison by zero is attempted', () => {
    expect(operate('85', '0', '÷')).toBe('Error');

    expect(operate('0', '0', '÷')).toBe('Error');

    expect(operate('-30', '0', '÷')).toBe('Error');
  });

  it('Doesn\'t return "Error" when is not a division by 0', () => {
    expect(operate('34', '0.004', '÷').toString()).not.toBe('Error');
  });
});
