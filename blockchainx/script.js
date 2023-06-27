// navbar
const nav = document.querySelector('nav');

      window.addEventListener('scroll',()=>{
          if(window.scrollY >= 100){
              nav.classList.add('active_nav');
          }
          else{
              nav.classList.remove('active_nav');
          }
      })

// back-to-top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

      