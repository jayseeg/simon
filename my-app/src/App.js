import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultProps = {
    quadrants: [
      0,
      1,
      2,
      3,
    ]
  }

  render() {
    return (
      <div className="App">
        {this.props.quadrants.map(val => (
          <div className={'quadrant quadrant-' + val} />
        ))}
      </div>
    );
  }
}

export default App;
