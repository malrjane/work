const buttons = document.querySelectorAll('.wrapperMy');
const click = document.querySelectorAll('.menu_article');

let arr = document.querySelectorAll('.menu_drinks_food');
Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    btn.nextElementSibling.classList.toggle('hidden');
    btn.firstElementChild.classList.toggle('click');
  })
});


$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    clidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true, 
    touchThreshold: 10,    //
  });
});
