import React, { Component } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      
      <div style={{ fontFamily: 'Covered By Your Grace, cursive' }}>
        <NavBar />
        <Home />
      </div>
     
    );
  }
}

export default App;
