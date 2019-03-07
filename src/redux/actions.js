const FETCHED_GAMES = 'FETCHED_GAMES'

export function fetchedGames(games){
    return { type: FETCHED_GAMES, games: games}
}