import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === null || numberTwo === null) {
    return numberOne ?? 0;
  }

  let result = 0;
  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case '+':
      result = x.plus(y);
      break;

    case '-':
      result = x.minus(y);
      break;

    case 'X':
      result = x.times(y);
      break;

    case '÷':
      if (numberTwo === '0') {
        result = 'Error';
      } else {
        result = x.div(y);
      }
      break;

    default:
      break;
  }

  return result;
};

export { operate as default };
