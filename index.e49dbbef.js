const e=document.querySelector(".js-articles-container"),t=new class{fetchEvents(){return fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=2V21koh33DKniuaGAcV6NpSm4RteCUeI").then((e=>{if(!e.ok)throw new Error("error");return e.json()})).then((e=>e._embedded?e._embedded.events:[]))}};document.addEventListener("DOMContentLoaded",(()=>{!async function(){try{const a=await t.fetchEvents();if(0===a.length)return;!function(t){const a=t.map((e=>`\n      <li class="card">\n        <img class="card-img" src="${e.images[0].url}" alt="${e.name}">\n        <h2 class="card-header">${e.name}</h2>\n        <p class="card-date-text">${e.dates.start.localDate}</p>\n        <p class="card-locate-text">${e._embedded.venues[0].name}</p>\n      </li>\n    `)).join("");e.insertAdjacentHTML("beforeend",a)}(a.slice(0,20))}catch(e){console.error("Error",e)}}()}));new Pagination("pagination",{totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});
//# sourceMappingURL=index.e49dbbef.js.map
