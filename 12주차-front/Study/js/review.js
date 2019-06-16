
// alert('Hello World');
console.log('확인하면서 작성하기')
console.log(document.getElementById('test'))
document.getElementById('test').innerHTML = '<h2 class="title">Hollys</h2>';

var h2 = document.getElementsByClassName('title')[0];
h2.textContent = "치킨치킨";

document.getElementById('chicken').append(h2)
console.log(h2)

document.getElementById('chicken').style.textDecoration = 'underline';

var x, y, z;
x = 10
y = 12
z = 5;
console.log(x + y + z)
console.log(x * y % z);

console.log( x+= 3);
console.log('hi'+ '2' + z);
console.log( ++z );

var status1 = 22;
// console.log(typeof status1);

// let snv = 1;
// console.log(typeof snv)

if (typeof status1 === 'string'){
  console.log('영웅은 죽지 않아요');
  console.log(typeof status1);
} else if (typeof status1 === 'number'){
  console.log('숫자입니다')
  console.log(typeof status1);
} else {
  console.log(typeof status1);
}

function textIn (target, tagName, insertCon){
  var crA = document.createElement(tagName)
  crA.textContent = insertCon;
  target.append(crA);
}

textIn(document.getElementById('test'), 'p', '뭐야 어려워 무서워 이게 뭐야');

textIn(document.getElementById('demo'), 'h1', '끼야아아아ㅏ아ㅏㅏㅏㅏㅏㅏㅏㅏㅏ')

function myNum(a, b){
  if (a >= b) {
    return 'sucess!'
  } else {
    return 'fail';
  }
}
console.log(myNum(3, 3))

function bill(pay, price){
  var qty, chg;
  qty = parseInt(pay / price);
  chg = pay - (price * qty);
  var bills = document.getElementById('answer');
  bills.innerHTML = pay +'원으로 '+price+'원의 물건을 살 경우 최대'+ qty +'개 살수 있으며, 거스름돈은 ' + chg+ ' 원입니다.'
}
bill(39900, 2540);

function myText(text){
  return `입력한 텍스트는 ${text} 입니다.`
}
console.log(myText('꺄악ㄴ'))

function doCalc(n1, n2){
  return `두 수의 합은 ${n1 + n2} 입니다.`
}

console.log(doCalc(200, 53422341234))

var bulid = {
  firstS: 'Cafe',
  secondS : 'Trestraunt',
  thirdS: 'Library',
  forthS: 'Theater'
} //key(property) : value(값)

console.log(bulid.forthS)

//2019 01 13
let favorite = {
  color: 'purple',
  food : ['bread', 'tea', 'pasta', 'sweets'],
  number: 7,
  abc : function(a){
    return `좋아하는 숫자는 ${this.number} 이고, 좋아하는 색은 ${this.color}고, 음식들은 ${this.food}입니다.`
  }
}
console.log(favorite.abc());

let a = new Date(); //인스턴스 또한 객체임!
a.name = '육성재'
console.log(a)
console.log(a.getFullYear());
console.log(a.getHours());
console.dir(a) // 디렉토리로 감

function getAbc(){
  console.log('abc');
  return 'abc';
}

var txt = '호로로로로로로룋히히히라라ㅓ히하하'
console.log(txt.length);

let txt2 = '서은광 이민혁 이창섭 임현식 이민혁'

console.log(txt2[0])
console.log(txt2.indexOf('서은광'))
console.log(txt2.lastIndexOf('이민혁'))
console.log(txt2.indexOf('이민혁', 6))

let txt3 = '할리스 커피 얼그레이'
console.log(txt3.slice(3, 8))
//slide(7, 13) index 7번째부터 13앞까지 7<=  <13 단 원본이 변하지 않는다!
// 정수면 앞에서부터, -는 뒤에서부터.

//substring(start, end) 는 7, 3 으로 적더라도 3번째붙 7번째 앞까지 잘라옴(이 함수만 시작과 끝값 적는게 유동적)

//substr(start, length) 시작값부터 length까지(포함) 3, 7이면 3번째 글짜부터 7번째글자 포함하고 자른다.