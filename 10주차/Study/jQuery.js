let slideW = $('.slide').innerWidth() + "px";
console.log(slideW)
// $('.prev').on('click', function () {
//   $('.slide_wrap').animate({ 'left': `-100%` }, 1000, function () {
//     $('.slide_wrap').append($('.slide').first());
//     $('.slide_wrap').css({ "left": 0 })
//   });
// });

// $('.next').on('click', function () {
// $('.slide_wrap').prepend($('.slide').last()).css('left','-100%');
// $('.slide_wrap').animate({'left': '0'}, 1000); 
// })

let idx = 0;
// function slide_prev(){
$('.prev').on('click', function () {
  if (idx == 0) {
    idx = 1;
    $('.slide_wrap').animate({ 'left': `-100%` }, 1000, function () {
      $('.slide_wrap').append($('.slide').first());
      $('.slide_wrap').css({ "left": 0 })
      idx = 0;
    });
  }
});


// function slide_next(){
$('.next').on('click', function () {
  if (idx == 0) {
    idx = 1;
    $('.slide_wrap').prepend($('.slide').last()).css('left', '-100%');
    $('.slide_wrap').animate({ 'left': '0' }, 1000, function () {
      idx = 0;
    });
  }
})
// }