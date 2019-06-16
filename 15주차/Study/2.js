var name = '수박';
function ddd (){
  name = '참외'
  //var를 따로 선언해주지 않으면 전역변수를 가져옴 scope안에서 var name;이 생기는게 아니다
}
//function 선언하면 어디서 작성하든 최상단에서 불러오는 것처럼 되서 어디서든 불러쓸수있음!


casss = 'dddd'

console.log(this)
//그냥 하면 window타겟
console.log(this.document)

function test(){
  console.log(this)
}
test(); //함수내에서도 this를 사용하면 window

var ch = {
  mbc: '문화방송',
  sbs: '^^?',
  kbs: function(){
    console.log(this.mbc);
    return (function(){
      console.log(this)
    })()
  },
  ebs: function () {
    return this.sbs + this.mbc
  }
}
ch.kbs();
console.log(ch.ebs())
/**
 * 아무것도 없는 곳에서 this : window
 * function 안에서 this: window
 * 객체 안에 있는 함수에서 this : 자신이 포함된 객체전체
 * 객체 안에 있는 함수내에서 또 함수를 사용하고, this를 찍으면 : window
 */

//  document.querySelector("#submit_Bt").addEventListener("click", function(e){
//    e.preventDefault();
//    console.log(this)
//  })

 document.querySelector("#form1").addEventListener("submit", function(e){
   e.preventDefault();
   console.log(this.이름.value)
   console.log(this.이름.id)//class는 못가져오고, 다른 attribute는 다 가져온다!
   console.log(this.check1.checked)
 })
 //이벤트리스너로 이벤트 바인딩이 되어 있는 애를 this로 가져오는것. querySelector자체를 가져오는게 아님
  
 var obj1 = {
   a: 'alpha',
   b: '',
   getName: function(){
     return this.firstName + this.middleName + this.lastName 
   }
 }
 var obj2 = {
   firstName: 'ho',
   lastName: 'ee',
   middleName: 'kk'
 }

 console.log(obj1.getName.call(obj2))
 //call함수 안에 인자값을 this의 참조로 묶어(바인딩)준다, 기존 값을 아예 바꾸는 치환이랑 다른거!

 // console.dir(console) dir은 그 객체의 구조를 보여준다!
console.clear();
 const mh = ['이민혁', '군대가지마','허어어엉']
 mh.push('ㅜㅜㅜㅜ')

console.log(mh)
const obj3 = {
  a: 11,
  b: 'beta'
}
obj3.c = 'bb';

console.log(obj3)
const str = "ggg";
// str = "333"
console.log(str)

//const 변수안에 string, number는 무조건 값이 바뀌면 안되고, 배열, 오브젝트내에 키값이나 값이 바뀌어도 상관없음. 단, type이 바뀌면 안됌

/** 
 * let은 호이스팅만 안되고 var처럼 재선언도 됌
 * 단 let abc = "333", let abc="321" 이런식으로 let으로 재선언은 안됌(var는 되지만..)
 * let abc = "1234" let abc = "3333"
*/

{
  var x = 10;
}
console.log(x);//이건 var가 호이스팅되서 블럭 밖에 var x;가 이미 선언

// {
//   let y = 5;
// }

// console.log(y)

/**
 * 시장에가면
 * 1. 유저가 값을 입력
 * 2. 배열에 계속 추가해주고
 * 3. 그 배열에 유저가 입력한 값이 일치해버리면 => 실패
 * 4. 일치하지 않으면 추가.
 * 5. 단, 비교할때 공백값을 없애야하고.
 * 6. 글자만 입력하게 해야되고.
 * 7. 반복
 * 8. null값은 넣으면 안되고
 * 
 * 글자 + 숫자 조합은 split으로 구분한다음 forEach돌리는 방법도!
 * 단, split은 값이 없을때 못나눔!!
 * 일반 function (){}을 continue를 해주고 for문안에 넣어도, return값이 없어서 continue가 안먹힘
 */

function gogoMarket(){
 var go = confirm("시장에 갈건가요? ^_^?")
 for(; go ;){
   var isMarket = [];
   var userAnswer = prompt("시장에 가면! 뭐가 있을까요?")
   if (userAnswer === null){
     alert("글자를 입력해주세요")
     continue;
   } else if(!isNaN(userAnswer)){
     alert("글자를 입력해주세요")
     continue;
   }
   isMarket.push(userAnswer.trim())
   console.log(isMarket)
   var repeat = parseInt(isMarket.length)
   for (; repeat > 0 ;) {
     var nextAnswer = prompt("시장에 가면! 또 뭐가 있을까요?")
     if (nextAnswer === null){
      alert("글자를 입력해주세요")
      continue;
    } else if(!isNaN(nextAnswer)){
      alert("글자를 입력해주세요")
      continue;
    }
     var compareV = isMarket.indexOf(nextAnswer.trim());
     console.log(compareV)

     if (compareV < 0) {
       isMarket.push(nextAnswer)
       console.log(isMarket);
       continue;
     } else {
       alert("이미 있는 물건입니다!")
       break;
     }
   }
   var again = confirm("재도전?")
   if(!again){
     go = false;
   }
 }
}

document.querySelector("#market").addEventListener("click", function(){
  gogoMarket();
})

//20190207
/*
var escGame = {
  list1: ['지하철에서', '집에서', '회사에서', '일본에서', '지옥에서'],
  list2: ['떡볶이를', '짜장면을', '상사를', '월급을'],
  list3: ['먹는다', '포장해 간다', '탕진한다', '때린다', '도망간다', '잃는다']
}

var pList1 = document.querySelector('.list1');
var plist2 = document.querySelector('.list2');
var plist3 = document.querySelector('.list3');

function listOutput(){
  if(window.event.keyCode === 27){}
}

pList1.innerHTML = escGame.list1
*/

var agree = confirm('로또 시작하시겠습니까?')

if(agree){
  var isAuto = confirm('자동으로 뽑으시겠습니까?')
  if(isAuto){
    let autoNumArr = [];
    let autoLoop = 0;
    for(; agree ; ){
      var count = prompt('몇장을 구매하시겠습니까?').trim();
      if(isNaN(count)){
        alert('숫자를 입력해주세요!');
        continue;
      }
      for( ; autoLoop < count ; autoLoop ++){}
    }
  }
}