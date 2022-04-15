$( document ).ready(function() {
  let path = window.location.pathname; 

  document.querySelectorAll('.menu a').forEach(element => {
    if (path === $(element).attr('href')) {
      $(element).parent().addClass('active');
    } else {
      if (path.match('/\\d{4}/\\d{2}/\\d{2}/')) {
        $('#news').addClass('active')
      }
    }
  })
});
