const buttons = document.querySelectorAll('.wrapperMy');
const click = document.querySelectorAll('.menu_article');

const arr = document.querySelectorAll('.menu_drinks_food');
Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (btn.nextElementSibling.classList.contains('hidden')) {
      btn.nextElementSibling.classList.remove('hidden');
      btn.nextElementSibling.classList.add('active');
    } else {
      btn.nextElementSibling.classList.remove('active');
      btn.nextElementSibling.classList.add('hidden');
    }
    btn.firstElementChild.classList.toggle('click');
  });
});

$(document).ready(() => {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    clidesToScroll: 3,
    speed: 800,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,

  });
});
