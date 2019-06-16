// $(document).ready(function(){
//   $('input[type=radio]').fadeOut(1000).fadeIn(1000);



// })


// $('#btn').on('click', function(){
//   console.log('click');
//   $('.box').animate({"backgroundColor":"black"},2000)
  
//   $('.box').animate({"backgroundColor":"black", "width":"100px", "height":"100px"},2000);
// });


// $("#btn").click(function(){
//   console.log('hello')
//   $('.box').animate({
//     width:"500px",
//     backgroundColor:"red"
//   },1000)
// })

$('#btn').on('click', function(){
  $('.box').toggleClass('test');
})

$('#btn').on('click', function(){
  $('.box').attr('title', 'box Title^^^^^^^');
})

// console.log($('.t1').html('^_^.....<br>변경중입니다요'));
//text를 안쓰면 t1의 내용을 그냥 가져오고, 안에 내용을 바꾸면 t1의 내용이 바뀐다
//.text()는 모든걸 다 string 으로 가져오고, .html()안에서는 태그도 인식함
// console.log($('.t2').text('테스트<br>시이이맇머'));

// let a = $('.t1').html();
// $('.t2').html(a);

console.log($('.t1').append($('.t2')));
//append 앞에 있는 애의 자식으로 뒤쪽으로 배치(앞에 있는 놈은 부모가 된다)
//appendTo append의 반대. 앞에 있는 놈을 뒤에 있는 놈의 자식으로 들어가고, 그 끝에 배치

$('.퉤 div').eq(3).css({'color':'red'}).text('안괜찮아');