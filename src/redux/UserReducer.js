export function UserReducer(state = null, action){
    switch(action.type){
        case 'ADD_USER':
            return action.user
        default:
            return state
    }
}