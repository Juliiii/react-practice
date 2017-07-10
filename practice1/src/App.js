import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    this.state = {
      content: ''
    };
  }


  render() {
    return (
      <h1>{this.state.content}</h1>
    );
  }
}

function renderContent (content) {
  
}

export default App;
