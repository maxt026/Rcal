import React, { Component } from 'react';

export default class Output extends Component {
  render() {
    return (
      <div className='result'> 
        <p className='result p'>{this.props.result}</p>
      </div>
    );
  }
}
