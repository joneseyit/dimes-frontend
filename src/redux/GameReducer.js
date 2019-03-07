export function GameReducer(state = null, action) {
    switch(action.type){
        case 'SHOW_GAME':
            return action.game
        default: 
            return state
    }
}