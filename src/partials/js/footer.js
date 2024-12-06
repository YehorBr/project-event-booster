import Pagination from 'tui-pagination';  


  const pagination = new Pagination('pagination', {
    totalItems: 500
});


pagination.on('afterMove', function(eventData) {
  console.log("after move, page:", currentPage);
  fetchAndRenderEvents()
  // articlesContainerRef.innerHTML = '';
  // fetchAndRenderEvents(currentPage);
});

// pagination.on('beforeMove', function(eventData) {
//     console.log("before move")
// });

// button.addeventlistener("click", () => {
//     // запит на бек енд
// });
