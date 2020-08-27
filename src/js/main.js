$(document).ready(function(){
    $('.slick-vertical').slick({
        vertical: true,
        slidesToShow: 2,
        autoplay: true,
        prevArrow: '<img src="/img/up.svg">',
        nextArrow: '<img src="/img/down.svg">'
    });
  });

  $('.slider').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "15%",
    speed: 500,
    focusOnSelect: true,
    prevArrow: 0,
    nextArrow: 0,
  });