import { searchByCountry } from "./api-server";
import { searchByKeyword } from "./api-server";
import { createMarkup } from "./main";

const select = document.getElementById('country_select')

select.addEventListener('change', (event) =>{
    console.log(event.currentTarget.value);
    searchByCountry(event.target.value)
        .then(events => {
        
            if (events._embedded) {
                const eventsByCountry = events._embedded.events
                createMarkup(eventsByCountry);
            }
        
    })
})

const searchInput = document.getElementById('keyword_search');

searchInput.addEventListener('input', debounce(async (event) => {
  const keyword = event.target.value.trim();
  if (keyword.length > 2) {
    try {
      const events = await searchByKeyword(keyword); 
      console.log('Events found for keyword:', keyword, events);
      createMarkup(events);
    } catch (error) {
    }
  }
}, 300));

function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }