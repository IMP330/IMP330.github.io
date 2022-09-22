$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'ease-out',
    });
  });

  $('.slideTwo').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
  });