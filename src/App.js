import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './adapters/API';
import Container from './containers/Container';

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <Container />
    </div>
  );
  }
}

export default App;
