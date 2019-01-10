$('.container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  respondTo: 'min'
});