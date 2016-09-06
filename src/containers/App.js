import React, { Component } from 'react';
import { connect } from 'react-redux'

class _App extends Component {
  render() {
    console.log(this.props)
    return (
      <h1>Hei</h1>
    );
  }
}

export const App = connect(state => state)(_App)
