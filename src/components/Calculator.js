import '../assets/App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const data = { total, next, operation };

  const handleClick = buttonName => {
    const { total, next, operation } = calculate(data, buttonName);

    setTotal(total);
    setNext(next);
    setOperation(operation);
  };

  return (
    <>
      <h2>Let’s do some math!</h2>
      <div className="calc">
        <Display result={next ?? operation ?? total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export { Calculator as default };
