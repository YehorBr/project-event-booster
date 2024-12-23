import { searchByCountry } from "./api-server";
import { searchByKeyword } from "./api-server";

const select = document.getElementById('country_select')

select.addEventListener('change', (event) =>{
    console.log(event.currentTarget.value);
    searchByCountry(event.target.value)
    .then(events => {
        const eventsByCountry = events._embedded.events
        // викликати функціїю яка рендерить події і передати їй eventsByCountry
    })
})
