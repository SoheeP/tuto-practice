//스크롤
$(window).scroll(function(){
  var currentPageTop = $(document).scrollTop();
  if (100 < currentPageTop){
    $('.scroll_down').fadeOut();
  } else {
    $('.scroll_down').fadeIn();
  }
})

//영상
$('.movie_btn').on('click', function () {
  if($(this).hasClass('attack')) {
    $('.prologue').removeClass('on');
    $('.movie_prologue').removeClass('select');
    $('.title_prologue').removeClass('select');
    $(this).addClass('on');
    $('.movie_attack').addClass('select');
    $('.title_attack').addClass('select');
  } else {
    $('.attack').removeClass('on');
    $('.movie_attack').removeClass('select');
    $('.title_attack').removeClass('select');
    $(this).addClass('on');
    $('.movie_prologue').addClass('select');
    $('.title_prologue').addClass('select');
    
  }
})