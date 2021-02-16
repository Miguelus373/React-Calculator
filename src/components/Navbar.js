import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <navbar className="flex nav">
    <h1>Math Magicians</h1>
    <div>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/calculator">Calculator</Link>
      {' | '}
      <Link to="/quote">Quote</Link>
    </div>
  </navbar>
);

export { Navbar as default };
