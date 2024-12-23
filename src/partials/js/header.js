import { searchByCountry } from "./api-server";

const select = document.getElementById('country_select')

select.addEventListener('change', (event) =>{
    console.log(event.currentTarget.value);
    searchByCountry(event.target.value)
    .then(events => {console.log(events);})
})

function searchByKeyword(keyword) {
    return fetch('https:....${keyword}')
    .then(r=>r.json())
}