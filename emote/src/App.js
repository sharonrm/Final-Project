import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Content from './components/Content'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Content />
        <Results />
      </div>
    );
  }
}

export default App;
