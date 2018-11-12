import React, { Component } from 'react';

export default class Quadrant extends Component {


  render() {
      return (
        <div className={'quadrant quadrant-' + this.props.val} onClick={this.props.handleQuadrantClick}/>
      )
  }
}

// <div className={'quadrant quadrant-' + val} />