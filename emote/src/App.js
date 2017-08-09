import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Content from './components/Content'
import Results from './components/Results'
import rd3  from 'react-d3'
import PieChart from 'react-d3/PieChart'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Content />
       
      </div>
    );
  }
}

export default App;
