import { combineReducers } from 'redux'
import { GamesReducer } from './GamesReducer'
import { GameReducer } from './GameReducer'
import { UserReducer } from './UserReducer'

const rootReducer = combineReducers({
    games: GamesReducer,
    game: GameReducer,
    user: UserReducer
})

export default rootReducer
