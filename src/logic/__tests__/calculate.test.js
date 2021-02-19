import calculate from '../calculate';

describe('Calculate', () => {
  it('Sets all states to null when "AC" is clicked', () => {
    const data = { total: '28', next: '32', operation: 'X' };

    expect(calculate(data, 'AC')).toStrictEqual({
      next: null,
      operation: null,
      total: null,
    });
  });

  it('Sets all states to null when total is "Error"', () => {
    const data = { total: 'Error', next: null, operation: null };

    expect(calculate(data, '25')).toStrictEqual({
      next: null,
      operation: null,
      total: null,
    });
  });

  it('Inverts sign of "next" when "+/-" is clicked', () => {
    const data = { total: null, next: '-10', operation: null };

    expect(calculate(data, '+/-').next).toBe('10');
  });

  it('Inverts sign of "total" when "+/-" is clicked and "next" is null', () => {
    const data = { total: '50', next: null, operation: null };

    expect(calculate(data, '+/-').total).toBe('-50');
  });

  it('Converts "next" to percentage number when "%" is clicked', () => {
    const data = { total: '25', next: '400', operation: null };

    expect(calculate(data, '%').next).toBe('4');
  });

  it('Converts "total" to percentage number when "%" is clicked and "next" is null', () => {
    const data = { total: '230', next: null, operation: null };

    expect(calculate(data, '%').total).toBe('2.3');
  });

  it('Updates all states when any operation is clicked', () => {
    const data = { total: null, next: '45', operation: null };

    expect(calculate(data, '+').operation).toBe('+');

    expect(calculate(data, '-').operation).toBe('-');

    expect(calculate(data, 'X').operation).toBe('X');

    expect(calculate(data, '÷').operation).toBe('÷');
  });

  it('Returns the result of the operation when "=" is clicked', () => {
    const data = { total: '37', next: '6', operation: 'X' };

    expect(calculate(data, '=').total).toBe('222');
  });

  it('Adds a decimal separator at the end of "next" when "." is clicked', () => {
    const data = { total: '40', next: '26', operation: '-' };

    expect(calculate(data, '.').next).toBe('26.');
  });

  it('Does\'nt add a decimal separator if there is already one', () => {
    const data = { total: '40', next: '14.', operation: '-' };

    expect(calculate(data, '.').next).toBe('14.');
  });

  it('Sets value of "next" when any number is clicked', () => {
    const data = { total: null, next: null, operation: null };

    expect(calculate(data, '7').next).toBe('7');
  });

  it('Updates value of "next" when any number is clicked', () => {
    const data = { total: null, next: '35', operation: null };

    expect(calculate(data, '9').next).toBe('359');
  });
});
