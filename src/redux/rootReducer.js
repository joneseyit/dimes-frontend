import { combineReducers } from 'redux'
import { GamesReducer } from './GamesReducer'
import { GameReducer } from './GameReducer'

const rootReducer = combineReducers({
    games: GamesReducer,
    game: GameReducer
})

export default rootReducer
