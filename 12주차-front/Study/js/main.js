// //팝업창 '확인'눌렀을 때 'hello world'가 들어가도록

// var ans = confirm('확인버튼을 눌러주세요.');

// if (ans == 1){
//   document.getElementById('answer').innerHTML='Hello World!';
// }

/**
 * JavaScript 프로그래밍언어 :)
 * 객체지향 언어
 * 
 */

//  alert('Hello World!')
console.log('Hello World');
document.getElementById('demo').innerHTML="Born To Beat";
document.getElementById('demo').style.backgroundColor='red';
document.getElementById('demo').style.display = 'none';
document.getElementById('demo').style.display = 'block'; // 인라인스타일로 다 적용된다

//변수
var x, y, z;
x = 10;
y = 5;
z = 20;

if( x + y - z < 0 ){
  console.log('hello');
} else {
  console.log('world');
}
console.log(x + y * z);

console.log("큰따옴표 안에 \"또 큰따옴표\" 역슬래시^_^ ")

x = x + 1;
x += 1;

// console.log(x);

++x;
console.log(x);


var numType = 3;
var strType = "하잇"
var objType = { bread: "스콘", tea: "히비스커스" };

function sum (a, b){//매개변수, 파라미터
  return a+b;
}
sum(1 ,2);//argument or 인자값
//함수실행은 ();
//argument(인자)는 외부에서 가져오는 값, function을 선언했을 때 내부에서 사용되는 값이 매개변수(파라미터)
//argument가 없어도 함수실행되지만, 매개변수가 없는 상태에서 argument를 넣어도 함수내에 매개변수가 생기지 않는다.

console.log(sum(1,2));

function multi (a, b, c){
  alert(a*b+c);
}
// multi(2,3,4);

function age(){
  var a = prompt('년도');
  document.getElementById('answer').innerHTML= 2019 - a;
}

// age();

// // function bigOrSmall(){
//   var ans = prompt('1~20까지의 수를 입력해주세요');
//   if(ans < 10){
//     console.log('10보다 작습니다')
//   } else {
//     console.log('10보다 큽니다');
//   }
// }
// // bigOrSmall();

//매개변수, 인자값을 이용해서 기능을 할 수 있게 하는게 function에 담는 의미가 있다!
// 그리고 function은 선언하는 순간 최상단에 위치해서, 어디든 호출할수 있다.

var btob ={
  member: ['서은광', '이민혁', '이창섭', '임현식', '프니엘', '정일훈', '육성재'],
  job: '가수',
  debutYear: 2012,
  func: function (a){
    console.log(this.debutYear);
    console.log(btob.member[a]);
  }
}

console.log(btob);
console.log(btob.member[6]);
console.log(btob['job']);
// console.log(btob.func(3));
btob.func(3);



var restruant = {
  food : ['bread', 'pasta', 'steak'],
  drink : ['coffe', 'wine', 'coke'],
  tableNum : 1,
  hour : '10:00 ~ 20:00',
  help : function(q){
    document.getElementById('test').innerHTML = this[q];
    //this.q 하면 객체내에서 key값이 q인애를 찾는다. 객체내에서 q에 들어간 key값을 찾고 싶은거면 []에 넣어주기!
  }
}

// var needHelp = confirm('도움이 필요하신가요?');
// if (needHelp == 1){
//   var q = prompt('food, drink, tableNum, hour 중 입력하세요');
//   restruant.help(q);
// }

var cellphone = {
  company: 'Samsung',
  model: 'Galaxy Note9',
  date: '21 Aug, 2018',
  ram: 512,
  color: 'Ocean Blue'
}

//커피 안내, 이름 가격
var coffee = {
  메뉴판:['아메리카노','카푸치노','핫초코','티'],
  아메리카노: 3500,
  카푸치노: 4500,
  핫초코: 4000,
  티: 5000
}
var order = confirm('주문하시겠습니까?')
if (order){//조건이 어차피 true, false값이므로 굳이 order == 1 식으로 정해주지 않아도 된다!
  var menu = prompt(coffee.메뉴판+' 중 선택해주세요')
  info(menu);
} else {
  alert('다음에 이용해주세요')
}

function info (menu){
  if(coffee[menu] == undefined){
    alert('메뉴확인해주세요');
    return; //true값이면 실행하고 바로 종료, 아래 함수는 실행되지 않음
  }
    alert('주문하신 음료는 '+ menu +' 이고, ' + coffee[menu] + '원입니다')
}

