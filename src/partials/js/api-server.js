const BASE_URL = 'app.ticketmaster.com'
const API_KEY = '2V21koh33DKniuaGAcV6NpSm4RteCUeI'


export function searchByCountry(country) {
    console.log(country);
    return fetch(`${BASE_URL}/discovery/v2/events?locale=${country}&apikey=${API_KEY}`)
    .then(r=>r.json())
}