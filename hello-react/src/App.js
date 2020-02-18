import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    const user = {
      name: "Anne",
      hobby: ["game", "ball"]
    }
    return (
      <div className="container" >
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello World</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home user={user} age={12} name="张三">
              <h4>I am a child</h4>
            
            </Home>
          </div>
        </div>
      </ div>
    );
  }
}

export default App;
