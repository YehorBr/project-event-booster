const BASE_URL = 'app.ticketmaster.com'
const API_KEY = '2V21koh33DKniuaGAcV6NpSm4RteCUeI'


export function searchByCountry(country) {
    console.log(country);
    return fetch(`https://${BASE_URL}/discovery/v2/events?locale=${country}&apikey=${API_KEY}`)
    .then(r=>r.json())
}

export function searchByKeyword(keyword) {
    console.log(keyword);
    return fetch(`https://${BASE_URL}/discovery/v2/events?locale=${keyword}&apikey=${API_KEY}`)
    .then(r=>r.json())
}