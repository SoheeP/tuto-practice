function randomizeNum (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// setInterval(function(){console.log(randomizeNum(3,5))}, 100)

var age = (18 < 20) ? "Too Young" : "Older"
/*
(age > 18)
? "Too young"
: "Older"
 */
console.log(age);

console.log(isNaN('ddd'))
//Not a Number ? true(string, boolean etc)

var getT = new Date;
var currentT = getT.getHours()

if(currentT > 17){
  console.log("Good Evening!")
} else if(10 < currentT && currentT < 17){
  console.log("Good Afternoon!")
} else {
  console.log("Good Morning!")
}

//3항식을 이용해서 숫자게임
//switch문에 오늘 요일 가져와서 목,금 평일에는 평일 주말일땐 신나는 주말 ^_^


var getD = new Date;
var currentD = getD.getDay();
//0 일요일 1 월요일 2 화요일 3 수요일 4 목요일 5 금요일 6 토요일
switch (currentD) {
  case 4:
  case 5:
    {
      console.log('조금 있으면 주말!')
      break;
    }
  case 0:
  case 6:
    {
      console.log('주말이지만 곧 출근해야함^^!!')
      break;
    }
  default:
    console.log('주중이다!')
}

var seasons = ['spring', 'summer', 'autumn', 'winter']
var text = '';

// for(var i = 0; i < seasons.length; i++){
//   text += seasons[i] + '\n'
// }
// console.log(text);

for(var i = 0, len = seasons.length; i < len; i++){
  text += seasons[i] + '\n'
}//초기값에 변수 선언 안하는게 좋고, var 일땐 잘먹힐 수 있지만 let으로 선언할 경우 안먹힘!
console.log(text);

var obj = {
  state: ['배고픔', '정신나감', '힝구힝구'],
  phone: 'Galaxy',
  wish: 'Monitor',
  ring: 8
}

for( x in obj){
  console.log(obj[x]);
}
//객체순회!

var list = {
  아메리카노: 3000,
  카페라떼: 4500,
  얼그레이: 4300,
  고삼차: 9900
}
var coffee = [];
for(x in list){
  coffee.push(x);
}
console.log(coffee)

//2중객체 키값들이 리스트에..??
var coffeeList = {
  list: [],
  coffee:{
    아메리카노: 3000,
    카페라떼: 4500,
    얼그레이: 4300,
    고삼차:9900,
    캐모마일: 5500,
  }
}

for( x in coffeeList.coffee){
  coffeeList.list.push(x)
}
console.log(coffeeList.list);

console.clear();

//2중배열..
var myArr = [
  [],
  ['짱구', '철수', '맹구', '훈이', '영희']
]

// for(var i = 0; i < myArr[1].length; i+=2){
//   myArr[0].push(myArr[1][i]);
// }
// console.log(myArr[0])

myArr[1].forEach((x, idx)=>{
  (idx%2 == 0) ? myArr[0].push(x) : true;
  console.log(idx)
})

console.log(myArr[0])

//0~10
var j = 0
while(j < 11){
  console.log(j)
  j++;
}

console.clear();
/*
var game = confirm('야구게임 시작')

while (game) {
  var minR = prompt('야구게임 최소 숫자 범위를 입력해주세요.').trim();
  if(isNaN(minR)){
    minR = prompt('숫자만 입력해주세요')
  } else if(minR == null || minR == ''){
    alert('게임을 종료합니다.')
    game = false;
    break;
  }
  var maxR = prompt('야구게임 최대 숫자 범위를 입력해주세요.').trim();
  if(isNaN(maxR)){
    maxR = prompt('숫자만 입력해주세요')
  } else if(minR == null || minR == ''){
    alert('게임을 종료합니다.')
    game = false;
    break;
  }
  var userAnswer = prompt(`${minR}~${maxR} 숫자 중에 하나를 입력해주세요`)
  var computer = randomizeNum(+minR, +maxR);
  for (; game ;) {
    console.log(computer)
    if (userAnswer == computer) {
      alert('정답입니다!')
      break;
    } else if( userAnswer == null || userAnswer == ''){
      userAnswer = prompt('숫자를 다시 입력해주세요')
    } else if (userAnswer > computer) {
      alert(`${userAnswer}보다 더 작습니다.`)
      userAnswer = prompt('다른 숫자를 선택해보세요')
    } else {
      alert(`${userAnswer}보다 큽니다.`)
      userAnswer = prompt('다른 숫자를 선택해보세요')
    }
  }
  var again = confirm('다시 도전하시겠습니까?')
  if (!again) {
    game = false;
  }
}
*/

//로또로또
var lottoRange = []
for(var i = 1;  i < 46; i++){
  lottoRange.push(+i);
}
console.log(lottoRange)

//for문으로 몇개 살것이냐!! 갯수값 받아서 돌려돌려돌ㄹㄹㄹㄹㄹㄹㄹㄹ 조건이 완료되면 break;
var lottoAuto = []
    for (var islottoAuto = true; islottoAuto ; ) {
      if(lottoAuto.length == 6){
        islottoAuto = false;
        break;
      }
      var rand = Math.ceil(Math.random() * lottoRange.length)
      if(lottoAuto.indexOf(rand) == -1){
        lottoAuto.push(rand)
      }
    } //1회자동배열


console.log(lottoAuto)
//1~45 숫자를 만든다
//1~45배열중 아무런 숫자를 뽑아서 넣는다
