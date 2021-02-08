import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  let result;

  if (buttonName === 'AC' || total === 'Error') {
    result = { total: null, next: null, operation: null };
  } else if (buttonName === '+/-') {
    if (next === null) {
      result = { total: total ? (total * -1).toString() : total };
    } else {
      result = { next: (next * -1).toString() };
    }
  } else if (buttonName === '%') {
    if (total === null && next !== null) {
      result = { next: next ? (next / 100).toString() : next };
    } else if (next === null && total !== null) {
      result = { total: total ? (total / 100).toString() : total };
    }
  } else if (['+', '-', 'X', '÷'].includes(buttonName)) {
    result = {
      total: total ?? next,
      next: null,
      operation: buttonName,
    };
  } else if (buttonName === '=') {
    result = {
      total: operate(total, next, operation).toString(),
      next: null,
      operation: null,
    };
  } else if (buttonName === '.' && next) {
    result = { next: next.includes('.') ? next : `${next}.` };
  } else {
    result = { next: next ? next + buttonName : buttonName };
  }

  return result;
};

export { calculate as default };
