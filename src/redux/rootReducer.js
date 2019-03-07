import { combineReducers } from 'redux'
import { GameReducer } from './GameReducer'

const rootReducer = combineReducers({
    games: GameReducer
})

export default rootReducer
