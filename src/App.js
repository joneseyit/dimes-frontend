import React, { Component } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import GamesContainer from './components/GamesContainer'
import Profile from './components/Profile'
import Login from './components/Login'
import About from './components/About'
import CreateUser from './components/CreateUser'

class App extends Component {
  render() {
    return (
      
      <div style={{ fontFamily: 'Covered By Your Grace, cursive' }}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/games' component={GamesContainer} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/about' component={About} />
          <Route  path='/signup' component={CreateUser} />
        </Switch>
      </div>
     
    );
  }
}

export default App;
