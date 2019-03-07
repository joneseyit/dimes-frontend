import React, { Component } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import GamesContainer from './components/GamesContainer'


class App extends Component {
  render() {
    return (
      
      <div style={{ fontFamily: 'Covered By Your Grace, cursive' }}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/games' component={GamesContainer} />
        </Switch>
      </div>
     
    );
  }
}

export default App;
