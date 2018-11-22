$('.input_s').focus(function(){
  $('.back').addClass('animation');
}).blur(function(){
  $('.back').removeClass('animation');
})

$('.play').focus(function(){
  $('.rect').animate({
    width: '200px',
    height: '200px'
  }, 5000)
}).blur(function(){
  $('.rect').stop();
})