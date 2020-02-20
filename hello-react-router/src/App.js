import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import About from './About';
import Vip from './Vip';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
            <Route path="/" component={ Vip } />
        <Route path="/about" component={ About } />
        <Route path="/vip" component={ Vip } />
          </a>
        </header>
        
      </div>
    </Router>
  );
}

export default App;
