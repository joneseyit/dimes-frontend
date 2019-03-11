const FETCHED_GAMES = 'FETCHED_GAMES'
const SHOW_GAME = 'SHOW_GAME'
const ADD_USER = 'ADD_USER'
const LOGOUT = 'LOGOUT'
const ADD_GAME = 'ADD_GAME'

export function fetchedGames(games){
    return { type: FETCHED_GAMES, games: games }
}

export function showGame(game){
    return { type: SHOW_GAME, game: game }
}

export function addUser(user){
    return { type: ADD_USER, user: user }
}

export function logoutUser(){
    return { type: LOGOUT}
}

export function addGame(game){
    return { type: ADD_GAME, game: game}
}