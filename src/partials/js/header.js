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
