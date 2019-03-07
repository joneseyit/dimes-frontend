const FETCHED_GAMES = 'FETCHED_GAMES'

export function fetchedPhotos(games){
    return { type: FETCHED_GAMES, games: games}
}