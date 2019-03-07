const FETCHED_GAMES = 'FETCHED_GAMES'
const SHOW_GAME = 'SHOW_GAME'

export function fetchedGames(games){
    return { type: FETCHED_GAMES, games: games }
}

export function showGame(game){
    return { type: SHOW_GAME, game: game }
}