import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import GamesList from './GamesList'
import { GAMES } from '../endpoints'
import { connect } from 'react-redux'
import { fetchedGames } from '../redux/actions'
import { showGame } from '../redux/actions'
import ShowGame from './ShowGame'

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

                <Route path='/games/all' component={GamesList} />
                {/* Route for create game form */}
                <Route path='/games/:id'  render={ (props) => {
                    let id = parseInt(props.match.params.id)
                    let game = this.props.games.find( game => game.id === id)
                    return game ? (this.props.dispatch(showGame(game)) && <ShowGame />) : null  
                    }   

                } 
                />
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({games}, ownProps ) => {
    return { games: games }
}

export default connect(mapStateToProps)(GamesContainer)