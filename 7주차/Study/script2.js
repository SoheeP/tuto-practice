// $('.f1').addClass('f1-test');

$('.sub_nav').slideUp('fast');
// $('.menu_title').mouseover(function(){
//   $(this).find('>.sub_nav').stop().slideDown('fast');
// }).mouseleave(function(){
//   $(this).find('>.sub_nav').stop().slideUp('fast');
// })//슬라이드 효과 끝 - 한번해봄
$('.menu_title').on('click', function(){
  $(this).find('>.sub_nav').slideToggle('fast');
})

$('.f1').on('click', function(){
  console.log('hello');
  $('body').toggleClass('body-switch');
})//f1 funtion 끝

$('.hamburger').on('click', function(){
  $(this).find('span').toggleClass('close');
  $('.nav').toggleClass('nav-active');
})//hambuger 끝

$('.data-form').on('submit', function(e){
  e.preventDefault();
})//click이벤트 막음

$('.data-submit-btn').on('click', function(){
  console.log($('.data-input-text'))
  // if($('.data-input-text').val().length == 0){
  //   alert('1글자 이상 입력해주세요.');
  //   return;
  // }
  if($('.input1').val().length == 0|| $('.input2').val().length == 0 || $('.input3').val().length == 0){
    alert('1글자 이상 입력해주세요.');
    return;
  }

  console.log('hollaby');
  let data1 = '<td>' + $('.input1').val() + '</td>'
  let data2 = '<td>' + $('.input2').val() + '</td>'
  let data3 = '<td>' + $('.input3').val() + '</td>'
  let data = '<tr class="data-tr">' + data1 + data2 + data3 + '</tr>'


  console.log($('.input1').val().length);
  $('.db-table').append(data);
  $('input[type="text"]').val('');
  //$('.data-input-text').val(''); 위에 작성한건 모든 input type="text"에 적용됨
  // $('.db-table').append(data1);
  // $('.db-table').append(data2);
  // $('.db-table').append(data3);
})//button 함수 끝

$('.a').append('<p>하이하이</p>')
// $('<p>하이하이</p>').appendTo('.a'); 문법이 다른것^^같은^^....
$('.a').after('<span>애프터어어</span>');
$('.a').before('<span>비포오오오</span>');

let fakeB = $('.b').clone();

console.log(fakeB)

$('.c').empty();