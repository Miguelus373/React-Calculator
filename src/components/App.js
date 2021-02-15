import '../assets/App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
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
    <div className="calc">
      <Display result={next ?? total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export { App as default };
