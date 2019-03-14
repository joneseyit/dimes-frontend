

export function InvitesReducer(state = [], action){
    switch(action.type){
        case 'ALL_INVITES':
            return action.invites
        case 'RESPONDED':
            let unresponded = state.filter(invite => invite.id !== action.invite.id)
            return unresponded
        default:
            return state
    }
}