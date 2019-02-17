//로또

// var lottoNum =Array(45).fill().map((x,i)=> i+1);
// var suffle = [];
// while(lottoNum.length > 0){
//   var moveValue = lottoNum.splice(Math.floor(Math.random()* lottoNum.length),1)[0];
//   suffle.push(moveValue)
// }
// var bonus = suffle[suffle.length-1];
// var resNum = suffle.slice(0,6);
// console.log(`당첨숫자들 : `,resNum,` 보너스 :`,bonus);

//아이디, 비밀번호 로그인 엔터치면 =>아이디 비밀번호 값을 비우고 콘솔로 아이디, 비밀번호를 객체형식으로 뽑..

//form event넣되, submit막고 넣기.

let user = {
  name:"",
  pw: ""
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  user.name = this.loginId.value.trim();
  user.pw = this.loginPw.value.trim();
  
  this.loginId.value = "";
  this.loginPw.value = "";
  
  console.log(database)
  
  if(database.user[`${user.name}`] === +user.pw){
    alert("환영합니다")
    window.location.href = "./mypage.html"
  } else {
    alert("아이디와 비밀번호를 확인해주세요")
  }
})
