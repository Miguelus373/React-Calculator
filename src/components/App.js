import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Navbar from './Navbar';

const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/calculator" component={Calculator} />
      {/* <Route path="/quote" component={Quote} /> */}
      {/* <Route path="/" component={Home} /> */}
    </Switch>
  </main>
);

export { App as default };
