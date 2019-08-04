
/**
 * Elements
 */
const $valid__info_box = $('.valid__info_box');
const $valid__confirm_btn = $('.signup__btn.valid');
const $vaildTimer = $('#vaildTimer');
const $inputEmail = $('#inputEmail');
const $inputPassword = $('#inputPassword');
const $inputPasswordConfirm = $('#inputPasswordConfirm');

// alertIcon
const $email_alert_icon = $('.signup__alert_icon.email');
const $valid_alert_icon = $('.signup__alert_icon.valid');
const $password_alert_icon = $('.signup__alert_icon.password');
const $confirmPassword_alert_icon = $('.signup__alert_icon.confirm');

//regExp
// 8 - 15자리 영문, 숫자, 특문
const rePassword =  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

//이메일 정규식
const reEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// .signup__alert_icon{
  


let valid_num = [];
let setValidIdx = 0;
let timer;
$valid__confirm_btn.on('click', emailValidation);
$inputPassword.on("keyup", keyupInputPassword)
$inputPasswordConfirm.on("keyup", keyupInputPasswordConfirm)

function keyupInputPassword(e){
  const $this = $(this);
  const $val = $this.val();
  checkRegFn(rePassword, $val,check_success_reg,check_fail_reg);
  function check_success_reg(){
    $password_alert_icon.hide()
  }
  function check_fail_reg(){
    $password_alert_icon.show();
  }
  comparePasswordToConfirmPassword();
}

function keyupInputPasswordConfirm(e){
  comparePasswordToConfirmPassword()
}
function comparePasswordToConfirmPassword(){
  let checkEqual = $inputPassword.val() === $inputPasswordConfirm.val();
  if(checkEqual){
    $confirmPassword_alert_icon.hide()
  }else{
    $confirmPassword_alert_icon.show();
  }
}

function checkRegFn (reg, value, success_fn, fail_fn ){
  if(reg.test(value)){
    success_fn();
  } else {
    fail_fn();
  }
}
function emailValidation(e){ 
    {
        // 파이널 프로젝트떄 주석 풀기
    
      // GET request for remote image
      // axios({
      //     method: 'post',
      //     //라우터url
      //     url: '/signup/vaild',
      //   })
      //   .then(function (response) {
      //     /**
      //      * // 데이터 통신 성공 시
      //      * // response.data
      //      * {
      //      *  isResult:true,
      //      *  validNum:542543
      //      * }
      //      * 
      //      * // 데이터 통신 실패 시
      //      * {
      //      *  isResult:false
      //      * }
      //      */
      //     if(response.data.isResult){
      //       //true
      //       valid_num.push(response.data.validNum);
      //       $valid__info_box.slideDown(500)
      //     } else {
      //       //false
      //       alert('다시 시도해 주세요');
      //     }
      //   }).catch(function(err){
      //     console.log(err.message);
      //     alert('새로고침을 해주세요.')
      //   })
    }
    
    // email 아아아아아앙악 정규식
    const $inputEmailVal = $inputEmail.val();

    let checkEmailIdx = 0;
    checkRegFn(reEmail, $inputEmailVal, check_success_reg, check_fail_reg);
    function check_success_reg() {
      $email_alert_icon.hide()
      checkEmailIdx = 1;
    }
    function check_fail_reg() {
      $email_alert_icon.show();
      checkEmailIdx = 0;
    }
    if(checkEmailIdx === 1){
      // validation
      if(setValidIdx === 0){
        resetVaildInfo()
      }else{
        if(confirm('인증번호를 재발송 하시겠습니까?.')){
          resetVaildInfo('reset')
        }
      }
    }
}


function resetVaildInfo(state){
  if(state === 'reset'){
    clearInterval(timer);
  }
  setValidIdx=1
  let backEndResult = {
    isResult: true,
    vaildNum: 534634
  }
  valid_num.push(backEndResult.vaildNum);
  $valid__info_box.slideDown(500);
  setInterval_timer($vaildTimer, moment(3));
}

function setInterval_timer(elm, count) {
  var duration = moment.duration({
    'minutes': count,
    'seconds': 00
  });
  var timestamp = new Date(0, 0, 0, 2, 10, 30);
  var interval = 1;
   timer = setInterval(function () {
    timestamp = new Date(timestamp.getTime() + interval * 1000);

    duration = moment.duration(duration.asSeconds() - interval, 'seconds');
    var min = duration.minutes();
    var sec = duration.seconds();

    sec -= 1;
    if (min < 0) return clearInterval(timer);
    if (min < 10 && min.length != 2) min = '0' + min;
    if (sec < 0 && min != 0) {
      min -= 1;
      sec = 59;
    } else if (sec < 10 && sec.length != 2) sec = '0' + sec;

    elm.text(min + ':' + sec);
    if (min == 0 && sec == 0){
      setValidIdx = 0
      clearInterval(timer);
    }

  }, 1000);
}
