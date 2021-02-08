import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === null || numberTwo === null) {
    return 0;
  }

  let result = 0;
  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case '+':
      result = (parseFloat(x) + parseFloat(y)).toString();
      break;

    case '-':
      result = x - y;
      break;

    case 'X':
      result = x * y;
      break;

    case '÷':
      result = x / y;
      break;

    default:
      break;
  }

  return (result === Infinity ? 'Error' : result);
};

export { operate as default };
