const BASE_URL = 'app.ticketmaster.com'
const API_KEY = '2V21koh33DKniuaGAcV6NpSm4RteCUeI'

export function getDetailsOfEvent(){
    return fetch(`https://${BASE_URL}/discovery/v2/events/G5dIZb8kECzK3?apikey=${API_KEY}`)
    .then(res=> res.json())
}

