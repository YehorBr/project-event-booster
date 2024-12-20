function searchByCountry(country) {
    return fetch('https:....${country}')
    .then(r=>r.json())
}

function searchByKeyword(keyword) {
    return fetch('https:....${keyword}')
    .then(r=>r.json())
}



select.addEventListener('change', (e) =>{
    searchByCountry(e.target.value)
    .then(events => {

    })
 })