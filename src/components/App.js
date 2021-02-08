import '../assets/App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(previous => calculate(previous, buttonName));
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <Display result={next ?? total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
