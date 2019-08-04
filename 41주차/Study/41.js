const $email_form = $('#email_form');
const $email_submit_btn = $('.mail__btn');
const $modal_ok_btn = $('#form_ok');

// $email_form.on("submit", emailSubmitForm);

function emailSubmitForm(e){
  e.preventDefault();
  
}

$email_submit_btn.on("click", clickEmailSubmitBtn);
function clickEmailSubmitBtn(e){
  e.preventDefault();
  const $email_input = $('.mail__input');
  const $email_input_val = $email_input.val();
  const $modal_confirm_info_tx = $('#modal-userEmail');
  $modal_confirm_info_tx.html($email_input_val);
}

$modal_ok_btn.on("click", submitEmailForm);
function submitEmailForm(){
  $email_form.submit();
}


$(document).ready(function(e){
  //slider
$(".slider").slick({
  // normal options...
  infinite: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  speed: 500
  // the magic
  // responsive: [{
  //   breakpoint: 1024,
  //   settings: {
  //     slidesToShow: 3,
  //     infinite: true
  //   }
  // }, {
  //   breakpoint: 600,
  //   settings: {
  //     slidesToShow: 2,
  //     dots: true
  //   }
  // }, {
  //   breakpoint: 300,
  //   settings: "unslick" // destroys slick
  // }]
});
})