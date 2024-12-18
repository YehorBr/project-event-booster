import Pagination from 'tui-pagination';
import { TicketmasterApi } from './api-server';
import { createMarkup } from './main.js';

const articlesContainerRef = document.querySelector('.js-articles-container');
const ticketmasterApi = new TicketmasterApi();

const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination('pagination', options);

async function fetchAndRenderEvents(page) {
  try {
    const events = await ticketmasterApi.fetchEvents(page, options.itemsPerPage);
    return events
  } catch (error) {
    console.error('error', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderEvents(1);
});

pagination.on('afterMove', function (eventData) {
  const currentPage = eventData.page;
  fetchAndRenderEvents(currentPage)
  .then((events)=>{
    articlesContainerRef.innerHTML = '';
    createMarkup(events);
  })
});


