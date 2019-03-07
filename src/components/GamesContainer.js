import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import GamesList from './GamesList'
import { GAMES } from '../endpoints'
import { connect } from 'react-redux'
import { fetchedGames } from '../redux/actions'



class GamesContainer extends Component {
    getGames() {
        fetch(GAMES)
        .then(res => res.json())
        .then(games => this.props.dispatch(fetchedGames(games)))
    }

    componentDidMount(){
        this.getGames()
    }
    render() {
        return (
            <div>
            <Switch>
                <Route exact path='/games/all' component={GamesList} />
                {/* Route for create game form */}
                {/* Route for game show page */}
            </Switch>
            </div>

        )
    }
}

export default connect()(GamesContainer)