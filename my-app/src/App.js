import React, { Component } from 'react';
import Quadrant from './Quadrant';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeQuadrant: null,
    }
  }

  static defaultProps = {
    quadrants: [
      0,
      1,
      2,
      3,
    ]
  }

  handleQuadrantClick( idx ) {

    return function() {
      this.setState({activeQuadrant:idx});
    }
  }

  render() {
    console.log('activeQuadrant', this.state.activeQuadrant)

    return (
      <div className="App">
        {this.props.quadrants.map(val => (
          <Quadrant val={val} handleQuadrantClick={this.handleQuadrantClick(val).bind(this)} />
        ))}
        <div className='activeQuadrant'>{this.state.activeQuadrant}</div>
      </div>
    );
  }
}

export default App;
