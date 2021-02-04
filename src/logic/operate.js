import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case '+':
      result = x + y;
      break;

    case '-':
      result = x - y;
      break;

    case '*':
      result = x * y;
      break;

    case '/':
      result = x / y;
      break;

    default:
      result /= 100;
      break;
  }

  return result;
};

export { operate as default };
