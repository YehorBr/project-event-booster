import Pagination from 'tui-pagination';  

// const Pagination = tui.Pagination;

// const container = document.getElementById('pagination');
// const options = { // below default value of options
//      totalItems: 10,
//      itemsPerPage: 10,
//      visiblePages: 10,
//      page: 1,
//      centerAlign: false,
//      firstItemClassName: 'tui-first-child',
//      lastItemClassName: 'tui-last-child',
//      template: {
//          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//          moveButton:
//              '<a href="#" class="tui-page-btn tui-{{type}}">' +
//                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
//              '</a>',
//          disabledMoveButton:
//              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
//              '</span>',
//          moreButton:
//              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//                  '<span class="tui-ico-ellip">...</span>' +
//              '</a>'
//      }
// };
// const pagination = new Pagination(container, options);



  // Usage!!!

  // const Pagination = tui.Pagination;

  // const container = document.getElementById('tui-pagination-container');
  // const instance = new Pagination(container, { ... });
  
  // instance.getCurrentPage();

  // Usage!!!


  // Using custom events!!!

  var pagination = new tuiPagination('pagination', {
    totalItems: 500
});

pagination.on('beforeMove', function(eventData) {
    console.log("before move")
});

pagination.on('afterMove', function(eventData) {
    console.log("after move")
});


// button.addeventlistener("click", () => {
//     // запит на бек енд
// });

  // Using custom events!!!
