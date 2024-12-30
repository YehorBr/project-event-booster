import { TicketmasterApi } from './api-server';

const articlesContainerRef = document.querySelector('.js-articles-container');

const ticketmasterApi = new TicketmasterApi();

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderEvents();
});

async function fetchAndRenderEvents() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  articlesContainerRef.appendChild(loader);

  try {
    loader.style.display = 'block';
    const events = await ticketmasterApi.fetchEvents();
    if (events.length === 0) return;
    const firstTwentyEvents = events.slice(0, 20);
    createMarkup(firstTwentyEvents);
  } catch (error) {
    console.error('Error', error);
  } finally {
    loader.remove();
  }
}

export function createMarkup(events) {
  
  console.log('виклик');
  const markup = events
    .map(
      event => `
      <li class="card" id="${event.id}">
        <img class="card-img" src="${event.images[0].url}" alt="${event.name}">
        <h2 class="card-header">${event.name}</h2>
        <p class="card-date-text">${event.dates.start.localDate}</p>
        <p class="card-locate-text">${event._embedded.venues[0].name}</p>
      </li>
    `
    )
    .join('');

  articlesContainerRef.insertAdjacentHTML('beforeend', markup);
}

  articlesContainerRef.innerHTML = markup;

