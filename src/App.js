import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <BrowserRouter>
          <Route path="/" render={routeProps => <div>111111</div>} />
          <Route path="/home" render={routeProps => <div>222222</div>} />
          <Route path="/home/second" render={routeProps => <div>333333</div>} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
