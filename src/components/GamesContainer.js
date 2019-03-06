import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
class GamesContainer extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/games' component={GamesList} />
            </Switch>
        )
    }
}

export default GamesContainer