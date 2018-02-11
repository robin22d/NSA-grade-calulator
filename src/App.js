import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Calculator from './components/calculator.js';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NSA Grade Calculator</h1>
        </header>
        <Calculator/>
      </div>
    );
  }
}

export default App;
