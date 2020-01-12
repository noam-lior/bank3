import React, { Component } from 'react';
import logo from './logo.svg';
import { observer } from 'mobx-react'

import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <Router>

        <div id="link-container">
          <Link to='/transactions'> Transactions</Link>
          <Link to='/'> Operations</Link>
        </div>

        <Route path='/transactions' exact render={() =>
          <Transactions />}>
        </Route>

        <Route path='/' exact render={() =>
          <Operations />}>
        </Route>

      </Router>

    )
  }
}

export default App;
