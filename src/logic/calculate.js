import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  let result = { total, next, operation };

  if (buttonName === 'AC' || total === 'Error') {
    result = { total: null, next: null, operation: null };
  } else if (buttonName === '+/-') {
    if (next === null) {
      result.total = total ? (total * -1).toString() : total;
    } else {
      result.next = (next * -1).toString();
    }
  } else if (buttonName === '%') {
    if (next !== null) {
      result.next = (next / 100).toString();
    } else if (total !== null) {
      result.total = (total / 100).toString();
    }
  } else if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (Object.values(result).includes(null)) {
      result = {
        total: total ?? next,
        next: null,
        operation: buttonName,
      };
    } else {
      result = {
        total: operate(total, next, operation).toString(),
        next: null,
        operation: buttonName,
      };
    }
  } else if (buttonName === '=') {
    result = {
      total: operate(total, next, operation).toString(),
      next: null,
      operation: null,
    };
  } else if (buttonName === '.' && next) {
    result.next = next.includes('.') ? next : `${next}.`;
  } else {
    result.next = next ? next + buttonName : buttonName;
  }

  return result;
};

export { calculate as default };
