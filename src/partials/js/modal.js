import {getDetailsOfEvent} from './api-server'

const modalBackdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalContentContainer = document.querySelector('.modal-content')
const closeModalBtn = document.querySelector('.close-modal-btn')
const articlesContainerRef = document.querySelector('.js-articles-container');
const card = document.querySelector('.card')
const loader = document.querySelector('.loader');

articlesContainerRef.addEventListener('click', onArticlesClick)
closeModalBtn.addEventListener('click', onCloseModal)
modalBackdrop.addEventListener('click', onBackdropClick)
document.addEventListener('keydown', onEscapeModal)


function createModalMarkup(accident){
    return `<img class="small-img" src="${accident.images[7].url}" alt="">
    <div class="content-container">
    <img class="big-img" src="${accident.images[4].url}" alt="">
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

function onArticlesClick(e){
    if(e.target.parentNode.nodeName !== 'LI'){
        return
    }

    modalBackdrop.style.pointerEvents = 'auto';
    modalContentContainer.innerHTML = '';
    loader.style.display = 'block';
    
    let articleId = e.target.parentNode.id;

    modal.classList.add('is-show');

    getDetailsOfEvent(articleId)
    .then(accident =>{
        const modalMarkUp = createModalMarkup(accident)
        modalContentContainer.innerHTML = modalMarkUp;
    })
    .catch(err=> {console.log(err)
    modalContentContainer.innerHTML = '<h1>Не вдалося завантажити дані</h1>';
    })
    .finally(() => {
        loader.style.display = 'none';
    });

    
}

function onCloseModal(){
    if(modal){
        modal.classList.remove('is-show')
    }

}

function onBackdropClick(e){
    if(e.target === modalBackdrop){
        modal.classList.remove('is-show')
        modalBackdrop.style.pointerEvents = 'none';
    }
    else{
        return
    }   
}


    function onEscapeModal(e){
    if(e.key === 'Escape'){
        modal.classList.remove('is-show')
    }
    else{
        return
    }
}






