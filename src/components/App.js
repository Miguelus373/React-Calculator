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
    <>
      <Display result={next ?? total} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export { App as default };
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     this.setState(previous => calculate(previous, buttonName));
//   }

//   render() {
//     const { total, next } = this.state;

//     return (
//       <>
//         <Display result={next ?? total} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }
