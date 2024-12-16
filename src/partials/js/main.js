import { TicketmasterApi } from './api-server';

const articlesContainerRef = document.querySelector('.js-articles-container');

const ticketmasterApi = new TicketmasterApi();

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderEvents();
});

async function fetchAndRenderEvents() {
  try {
    const events = await ticketmasterApi.fetchEvents();
    if (events.length === 0) {
      return;
    }

    const firstThreeEvents = events.slice(0, 20);
    createMarkup(firstThreeEvents);
  } catch (error) {
    console.error('Error', error);
  }
}

export function createMarkup(events) {
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

