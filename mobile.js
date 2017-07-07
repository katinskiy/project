const WINDOW_MAX_WIDTH = 900;
const WINDOW_MAX_HEIGHT = 80;
const TIME_SLIDE = 300;
const TIME_HIDE = 400;

$('.burger_menu').click(function() {
  $('.header__menu .header__menu-list').slideToggle(TIME_SLIDE);
});

$(window).resize(function() {
  if ($(window).width() > WINDOW_MAX_WIDTH) {
    $('.header__menu').removeClass('burger_triger');
  }
});

$(window).scroll(function() {
  if ($(this).width() < WINDOW_MAX_WIDTH) {
    if ($(this).scrollTop() > WINDOW_MAX_HEIGHT) {
      $('#mobil-nav').hide(TIME_SLIDE);
    }
  }
});