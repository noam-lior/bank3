import React, { Component } from 'react';
import logo from './logo.svg';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Transactions from './components/Transactions/Transactions'
import Operations from './components/Operations/Operations'
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div>
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

      </div>

    )
  }
}

export default App;
