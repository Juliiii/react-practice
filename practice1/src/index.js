import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function renderContent (content) {
  class H1 extends Component {
    render () {
      return (
        <h1>{content}</h1>
      );
    }
  }
  ReactDOM.render(<H1 />, document.getElementById('root'));  
}

renderContent('hello world');


// ReactDOM.render(renderContent('hello world'), document.getElementById('root'));
registerServiceWorker();
