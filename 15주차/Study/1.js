var myArr = ['치킨', '족발', '맥주', '닭발']

myArr.forEach((x) => console.log(x))

//첫번째 인자의 배열이 div생성해서, 각각 인자들이 들어가서 2번째 인자의 자식으로 차곡차곡..?
//함수로 배열이 인자
function eachEach(arr, el, cl) {
  arr.forEach(function (x) {
    var createDiv = document.createElement('div');
    createDiv.textContent = x;
    el.appendChild(createDiv);
    createDiv.classList.add(cl)
  })
}
//배열, 요소, 클래스명을 확장성있게
var listDiv = document.getElementById('list');
eachEach(myArr, listDiv, 'or')

//forEach는 값을 반환하지 않지만, map은 반환함

var vari1 = myArr.forEach(function(x){
  return x
})
console.log(vari1);

var vari2 = myArr.map((x)=>x +'!!')
console.log(vari2);
//기존 배열은 건드리지 않고 새배열화 해서 엘리먼트 조절

var numArr = [1, 3, -2, 9, -10, 4, 5, 6, 7, 8,];

// var ingetorr = numArr.map((x)=>{
//   return (x>0) 
// })

var ingetorr = numArr.map((x)=>{
  if(x>0){
    return x;
  } //false상태를 안넣었는데도 map은 return해버린다. 무조건 값을 반환
})
// var ingetorr = numArr.filter((x)=>{
//   return (x>0) 
// })
//filter도 배열을 새로 반환하지만, 조건에 맞지 않는건 반환하지않음
console.log(ingetorr);

function allPush(arr) {
  var newNum = [];
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i];
    newNum.push(a);
  }
  return newNum;
}
var vari3 = allPush(numArr);
console.log(vari3)
console.clear();

var numRed = [1, 2, 3, 4, 7, 10]
console.log(numRed.reduce((x, y)=> x + y))
//x는 무조건 계산한 total

console.log(numRed.every((x)=>(x>3)))
console.log(numRed.some((x)=>(x>1)))

var indexArr = [1122, 1129, 226, 310, 304, 1004, 502]
//값이 있으면 true, 없으면 false 함수
function isIn (arr, val){
  var tAndF = arr.indexOf(val);
  return (tAndF === -1)
  ?'false'
  :'true'
}
console.log(isIn(indexArr, 333))

document.querySelector('#buy').addEventListener('click', function (){
  isInAlert(indexArr);
})

function isInAlert(arr) {
  var val = prompt('목록번호를 입력해주세요.')
  if (isNaN(val)) {
    val = prompt('숫자로 입력해주세요.')
  }
  var tAndF = arr.indexOf(+val);
  if (tAndF === -1) {
    alert('목록에 없습니다.')
  } else {
    alert('목록에 있습니다.')
  }
}

var heheArr = [1, 2, 3, 4, 5, 6]
console.log(heheArr.find((x)=> (x>3)))
//조건에 맞는 제일 첫번째 인자 반환


//자스는 single 스레드여서 중간에 오류나면 더이상 실행되지않음
console.log(`오류내보즈앙`)
try{
  console.log(gggg)//js상오류를 내면 내더라도 밑에 기능들이 실행됌
}catch(err){
  console.error(err, '쥬거쪄')
} finally {
  // alert('대피해! 오류야!') => 서버쪽에 신호를 보낼수도 있음!!
}
//시험삼아 구동시켜보고, 문제 없을때 삭제하는 식으로 씀 :)
console.log(`오류끝`)

abc = 'abc'
console.log(abc);
//사실 요건 var abc;를 자동으로 생성한것. 그래서 var는 웬만하면 쓰지 않고, let, const를 씀
//scope는 블럭(영역)의 개념

function testScope(){
  let g ='aa';
  return g
}
console.log(testScope())
// console.log(g)
console.clear();

/* strict모드는 함부로 썼다간 혼쭐난당! babel로 바꿀때 알아서 넣어줌
'use strict';
abcd = "abcd"
console.log(abcd)
*/