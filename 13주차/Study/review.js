// console.log(';_; JS복습')
// alert('복습하기!')
// var q_answer = confirm('작성중?')
// console.log(q_answer);

var cafe = {
  menuList: ['아메리카노', '카페라떼', '얼그레이', '캐모마일', '핫초코'],
  아메리카노: 4500,
  카페라떼: 5000,
  얼그레이: 4300,
  캐모마일: 4400,
  핫초코: 5500,
}

function order() {
  var menu = confirm('주문하시겠습니까?');
  if (menu) {
    var order = prompt(cafe.menuList + '중에 선택하세요');
    price(order);
  } else {
    alert('다음에 이용해주세요.');
  }
}
//  order();

function price(order) {
  if (order === undefined) {
    alert('메뉴를 하나만 고르거나, 다시 확인해주세요.')
  } else {
    alert(`선택하신 메뉴는 ${order}이며, 가격은 ${cafe.order}입니다.`)
  }
}

// 2019 01 19 ===========================
//  alert('토요일!')
console.group('요일');
console.log('토요일');
console.log('일요일');
console.groupEnd();

console.clear()
console.log('수요일')
console.group('음식');
console.log('떡볶이');
console.log('만두');

console.group('자동차');
console.log('메르세데스 벤츠');
console.log('도요타');
console.groupEnd();
console.groupEnd();

document.getElementById('demo').innerHTML = '<h1>복습중이지!</h1>'
document.getElementById('demo').style.color = 'red';

// var x = 10;
// function typeCheck(val){
//   if(typeof val == 'boolean'){
//     return 'boolean';
//   } else if (typeof val == 'number'){
//     return '숫자'
//   } else {
//     return '문자';
//   }
// }
// console.log(typeCheck(x))


//함수선언위치를 먼저 확인하는게 중요 / 변수안에 선언할 경우 실행순서보다 아래에 적혀있으면 불러오지 못함
function ggg(b) {
  console.group('ggg function')
  console.groupEnd();
  return ccc(b);
}

function ccc(n) {
  console.group('ccc function')
  console.log(n + '^')
  console.groupEnd()
}

ggg(33)
console.clear();

var i = 10;
for (; i >= 0; i--) {
  console.log(i);
}
//보통 반복문에는 i, j정도로 씀, 초기값이 없어도 자리는 잡아줘야함
//초기값, 조건값(실행되는 조건), 증감문
console.clear();
var myArray = ['특수문자', '한글', '영어', '일본어']
for (var j = 0; j < myArray.length; j++) {
  console.log(myArray[j]);
}

// var testNum = [];
// for(var j = 0; j <= 10; j++){
//   testNum.push(j);
// }
// for(var j = 0; j < testNum.length; j++){
//   var tn = testNum[j];
//   if(tn%2 == 0 && tn != 0){
//     console.log(tn)
//   };
// }
var ac = 10;
ac = 100;
// for(var i = 0; i <= ac; i++){
//   if(i%2 == 0 && i != 0){
//     console.log(i)
//   }
// }

// for(var i = 0; i<= ac; i+= 2){
//   if(i != 0){
//     console.log(i);
//   }
// }

for (var i = 0; i <= ac; i++) {
  if (i % 2 == 1 && i != 0) {
    console.log(i)
  }
}

console.clear();
// for(var i = 1; i<= 9; i++){
//   console.log(`2 x ${i} = ${2*i}`);
//   console.log(`3 x ${i} = ${3*i}`);
// }

function multi(insNum) {
  console.group(`${insNum}단`)
  for (var i = 1; i <= 9; i++) {
    console.log(`${insNum} x ${i} = ${insNum*i}`);
  }
  console.groupEnd();
}

for (var i = 0; i <= 9; i++) {
  if (i != 0) {
    multi(i);
  }
}

// console.group('바깥for문');
// for(var i = 0; i<=10; i++){
//   console.log('hg');
//   console.group('안쪽for')
//   for(var j = 0; j <= 10; j++){
//     console.log('ttt');
//   }
//   console.groupEnd();
// }
// console.groupEnd();

console.clear();
console.group('구구단');
for (var i = 0; i < 10; i++) {
  if (i != 0) {
    console.group(`${i}단`)
    for (var j = 0; j < 10; j++) {
      if (j != 0) {
        console.log(`${i} x ${j} = ${i*j}`);
      }
    }
    console.groupEnd();
  }
  
}
console.groupEnd();

/** 
 * continue 메모리 누수 막고, continue를 만나면 for문 조건값을 다시 거치면서 실행 
 * break는 아예 for문이 종료됨
*/

for (var i = 0; i<=10; i++){
  if(i % 2 == 0 && i != 0){
    console.log(i);
  }
  continue ;
  console.log('접근금지'); // continue로 인해서 실행안됌
}


//0시작되는 숫자중에 홀수 추출 continue 이용해서

for(var i = 0; i < 15; i++){
  if(i%2 == 0){
    continue;
  } else {
    console.log(i)
    // break; -> 1회만 실행하고 바로 break됌
  }
}



// while문은 초기값을 바깥에 선언하고, 조건값을 넣음
var g = 0;
while (g < 30) {
  if (g > 30) {
    continue;
  } else {
    g += 3; //증감문
    console.log(g)
  }
}


function multi2(val){
// var val = document.getElementById('getVal').value;
var ans = document.getElementById('answer');
ans.innerHTML =''; //함수 실행할때마다 값이 쌓이는걸 초기화
  for(var i =0; i <= 9; i++){
    if(i < 1){
      continue ;
    }
    ans.innerHTML +=`<p> ${val} x ${i} = ${val*i}</p>` //태그 증감(+=)
  }
}

