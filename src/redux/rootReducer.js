import { combineReducers } from 'redux'
import { GamesReducer } from './GamesReducer'
import { GameReducer } from './GameReducer'
import { UserReducer } from './UserReducer'
import { InvitesReducer } from './InvitesReducer'
const rootReducer = combineReducers({
    games: GamesReducer,
    game: GameReducer,
    user: UserReducer,
    invites: InvitesReducer
})

export default rootReducer
