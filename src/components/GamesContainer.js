import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import GamesList from './GamesList'
import { GAMES } from '../endpoints'
import { connect } from 'react-redux'
import { fetchedPhotos } from '../redux/actions'



class GamesContainer extends Component {
    getPhotos() {
        fetch(GAMES)
        .then(res => res.json())
        .then(photos => this.props.dispatch(fetchedPhotos(photos)))
    }

    componentDidMount(){
        this.getPhotos()
    }
    render() {
        return (
            <Switch>
                <Route exact path='/games' component={GamesList} />
            </Switch>
        )
    }
}

export default connect()(GamesContainer)