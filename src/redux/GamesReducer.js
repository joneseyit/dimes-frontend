export function GamesReducer(state = [], action) {
    switch( action.type ){
        case 'FETCHED_GAMES':
            return action.games
        case 'ADD_GAME':
            return {...state, ...action.game}
        default:
            return state
    }
}