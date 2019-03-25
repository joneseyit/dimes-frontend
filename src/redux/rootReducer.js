import { combineReducers } from 'redux'
import { GamesReducer } from './GamesReducer'
import { GameReducer } from './GameReducer'
import { UserReducer } from './UserReducer'
import { InvitesReducer } from './InvitesReducer'
import { UsersReducer } from './UsersReducer'

const rootReducer = combineReducers({
    games: GamesReducer,
    game: GameReducer,
    user: UserReducer,
    invites: InvitesReducer,
    users: UsersReducer
})

export default rootReducer
