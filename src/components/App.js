import React from 'react';
import { Switch, Route } from 'react-route-dom';
import Calculator from './Calculator';

const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
      <Route path="/" component={Home} />
    </Switch>
  </main>
);
