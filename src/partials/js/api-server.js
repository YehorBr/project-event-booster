const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = '2V21koh33DKniuaGAcV6NpSm4RteCUeI'; 

<<<<<<< HEAD
export function getDetailsOfEvent(){
    return fetch(`https://${BASE_URL}/discovery/v2/events/G5dIZb8kECzK3?apikey=${API_KEY}`)
    .then(res=> res.json())
}

=======
export class TicketmasterApi {
  fetchEvents() {
    const url = `${BASE_URL}events.json?apikey=${API_KEY}`;
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
>>>>>>> main
