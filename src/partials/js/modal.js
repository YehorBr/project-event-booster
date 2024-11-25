import {getDetailsOfEvent} from './api-server'

const modalBackdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const li = document.querySelector('li')

li.addEventListener('click', onListItemClick)

function createModalMarkup(accident){
    return `<div class="content-container"><img src="${accident.images[7].url}" alt="">
    <img src="${accident.images[9].url}" alt="">
    <div class="info-container">  
    <h3 class="title-info">INFO</h3>
    <p >${accident.promoter.description}</p>         
    <h3 class="title-when">WHEN</h3>         
    <p>${accident.dates.start.localDate}</p>         
    <p>${accident.dates.start.localTime} (${accident.dates.timezone})</p>         
    <h3 class="title-where">WHERE</h3>         
    <p>${accident._embedded.venues[0].city.name}, ${accident._embedded.venues[0].country.name}</p>         
    <p>${accident._embedded.venues[0].name}</p>         
    <h3 class="title-who">WHO</h3>         
    <p>${accident.name}</p>         
    <h3 class="title-price">PRICES</h3>         
    <p>${accident.priceRanges[0].type} ${accident.priceRanges[0].min}-${accident.priceRanges[0].max} ${accident.priceRanges[0].currency}</p>         
    <button type="button">BUY TICKETS</button>
    </div></div>            
           
    ` }

function onListItemClick(){
    getDetailsOfEvent()
    .then(accident =>{
        const modalMarkUp = createModalMarkup(accident)
        modal.innerHTML = modalMarkUp
    })
    
}





