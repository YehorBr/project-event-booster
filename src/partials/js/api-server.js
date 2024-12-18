const BASE_URL = 'app.ticketmaster.com';
const API_KEY = '2V21koh33DKniuaGAcV6NpSm4RteCUeI'; 

export function getDetailsOfEvent(id){
    return fetch(`https://${BASE_URL}/discovery/v2/events/${id}?apikey=${API_KEY}`)
    .then(res=> res.json())
}

export class TicketmasterApi {
  fetchEvents(page = 1, size = 20) {
    const url = `https://${BASE_URL}/discovery/v2/events.json?apikey=${API_KEY}&page=${page}&size=${size}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then(data => (data._embedded ? data._embedded.events : [])); 
  }
}
