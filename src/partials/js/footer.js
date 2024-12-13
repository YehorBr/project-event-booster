// import Pagination from 'tui-pagination';  


//   const pagination = new Pagination('pagination', {
//     totalItems: 500
// });


// pagination.on('afterMove', function(eventData) {
//   console.log("after move, page:", currentPage);
//   fetchAndRenderEvents()

// });

// 1V

// import Pagination from 'tui-pagination';
// import { TicketmasterApi } from './api-server';


// const articlesContainerRef = document.querySelector('.js-articles-container');


// const ticketmasterApi = new TicketmasterApi();


// const options = {
//   totalItems: 500,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,
// };


// const pagination = new Pagination('pagination', options);


// document.addEventListener('DOMContentLoaded', () => {
//   fetchAndRenderEvents(1);
// });


// pagination.on('afterMove', function (eventData) {
//   const currentPage = eventData.page;
//   fetchAndRenderEvents(currentPage);
// });


// async function fetchAndRenderEvents(page) {
//   try {
//     const events = await ticketmasterApi.fetchEvents(page, options.itemsPerPage);
//     renderEvents(events);
//   } catch (error) {
//     console.error('error', error);
//   }
// }


// function renderEvents(events) {

//   const markup = events
//     .map(
//       event => `
//         <li class="card">
//           <img class="card-img" src="${event.images[0].url}" alt="${event.name}">
//           <h2 class="card-header">${event.name}</h2>
//           <p class="card-date-text">${event.dates.start.localDate}</p>
//           <p class="card-locate-text">${event._embedded.venues[0].name}</p>
//         </li>
//       `
//     )
//     .join('');


//   articlesContainerRef.innerHTML = markup;
// }

// 1V


// 2V

import Pagination from 'tui-pagination';
import { TicketmasterApi } from './api-server';

const articlesContainerRef = document.querySelector('.js-articles-container');
const ticketmasterApi = new TicketmasterApi();

const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination('pagination', options);

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderEvents(1);
});

pagination.on('afterMove', function (eventData) {
  const currentPage = eventData.page;
  fetchAndRenderEvents(currentPage);
});

async function fetchAndRenderEvents(page) {
  try {
    const events = await ticketmasterApi.fetchEvents(page, options.itemsPerPage);

    articlesContainerRef.innerHTML = '';

    renderEvents(events);
  } catch (error) {
    console.error('error', error);
  }
}   

// 2V

