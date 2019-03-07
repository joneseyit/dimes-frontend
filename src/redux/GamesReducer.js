export function GamesReducer(state = [], action) {
    switch( action.type ){
        case 'FETCHED_GAMES':
            return action.games
        default:
            return state
    }
}