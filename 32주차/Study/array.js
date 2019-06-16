console.log('32주챀ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ');
var x = new Array(3);
for(var i = 0; i < 3; i++){
  x[i] = new Array(3);
}

//2차원 배열 값 대입
for(var count = 1, i = 0; i < 3 ; i++){
  for(var j = 0; j < 3 ; j++){
    x[i][j] = count++;
  }
}

console.log(x);
function abc(arg){
  console.log(arguments)
}

abc(1, 2, 3)

var a = {};
for(var i = 0 ; i < 10 ; i++){
  a[i] = i;
}
a.length = 10;
for(var i = 0, sum = 0; i <a.length ; i++){
  sum += a[i];
}

console.log(sum);

var a = {
  0: 'A',
  1: 'B',
  2: 'C',
  length : 3
};


console.log(
  Array.prototype.join.call(a, ",")
);
Array.prototype.push.call(a, "D");
console.log(a);

var [a, b] = [1, 2]
console.log(a, b);

[a, b] = [2*a, 3*b]

console.log(a, b);

var [c, d] = [[1, 2, 3], [4, 5, 6]]
console.log(c, d);

[a, b] = [b, a]
console.log(a, b);

[c, d] = [d, c];
console.log(c, d);

var [foo, poo] = ['ddong', 'poop']

console.log(foo, poo);

[foo, poo] = [poo, foo];
console.log(foo, poo);

var ggg = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

ggg.__proto__ = Array.prototype; // Array의 모든 메쏘드를 다 쓸수있음!
ggg.push('d');
console.log(
  ggg.map((x) => x)
);

var [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];

console.log(a, b, rest);

function abc(a=1, b=10){
  return a+b
};
console.log(
  abc()
);

var [a=2, b=10, c=15] = [33, 5];
console.log(a, b, c);

function rotation(x, y, theta){
  var s = Math.sin(theta);
  var c = Math.cos(theta);
  return [c*x - s*y, s*x + c*y]
};
var [a, b] = rotation(1, 2, Math.PI/3);
console.log(a, b);


//객체 비구조화 할당.
// #1.
var obj = {foo:123,goo:456};

var {foo:zoo} = obj;
var {goo} = obj;
console.log(zoo,goo);


var fruitObj = {수박:"달다",참외:"달다",토마토:"시다"};
var { 수박 : 박수 } = fruitObj;
console.log(박수);
console.log(fruitObj);

// let { isLoggedIn:loginCheck,isNotLoggedIn1 } = require('./middleware.js');
// loginCheck()
// isNotLoggedIn1()


var book = { js: '모던 자바스크립트', http: 'TCP/IP 쉽게 더 쉽게', html: 'W3C', css: '생활코딩'}
var { js : javascript } = book;
console.log(javascript);

var { a, b} = {a: 1, b: 2};
console.log(a, b);
var { a : x, b: y} = {a: 1, b: 2};
console.log(x, y);

// x= 1, y=2;
var { a: x, b: y} = {a:y, b:x};
var { sin, pow } = Math;
console.log(sin);
console.log(pow(2, 3));

var { a=1, b: y=2, c: z=3 } = {  b:4 };
console.log(a, y, z);

var [a, b, c] = "DEF";
console.log(a, b, c);

var [a, [b, c]] = [1, [4, 5]];
console.log(a, b, c);

var { a:x, zz:{ c:yy, d: dd}} = {a: 1, zz: {c: 2, d: 3}};
console.log(x, yy, dd);

var person = {name: "Tom", age: 17, hobby: ['Tennis', 'Music']};
var {name, age, hobby: [...all]} = person;
console.log(name, age, all);

function def (...ab){
  return ab
}
console.log(def([5, 6, 7, 8]));

console.log([...'Hello']);
console.log([1, ...[2, 3, ...[4, 5]]]);
var a = ['a', 'b', 'c'];
debugger;
a.push(...['nn', 'mm', 17, {day: 2, month: 6}])
console.log(a);

