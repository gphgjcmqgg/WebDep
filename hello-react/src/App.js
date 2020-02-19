import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Home from './components/Home';
import Temp from './components/Temp';
import ContextFather from './components/ContextFather';
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    title: 'React'
  }
}
  onGreeting(age) {
    console.log(age);
  }

  onChangeTitle(value) {
    this.setState({
      title: value
    });
  }

  getChildContext() {
    return { color : 'red'};
  }
  render() {
    const user = {
      name: "Anne",
      hobby: ["game", "ball"]
    }
    return (
      <div className="container" >
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header title={this.state.title}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello World</h1>
            <Temp val={this.state.title}/>
            <ContextFather/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home user={user} age={12} name="张三" greeting={this.onGreeting} changeTitle={this.onChangeTitle.bind(this)} title={this.state.title}>
              <h4>I am a child</h4>
            
            </Home>
          </div>
        </div>
      </ div>
    );
  }
}

App.childContextTypes = {
  color: PropTypes.string
}
export default App;
