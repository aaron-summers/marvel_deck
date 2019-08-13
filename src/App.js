import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './adapters/API';
import CharacterContainer from './containers/CharacterContainer';


class App extends React.Component {

  render() {
  return (
    <div className="App">
      <h1>MARVEL</h1>
      <CharacterContainer />
    </div>
  );
  }
}

export default App;
