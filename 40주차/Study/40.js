
/**
 * 부수효과(side effect)
 * 1. 원치않는 효과
 * 2. 함수내에서 값이 변경되는 효과(함수 동작 자체외에 발생하는 효과)
 */
//권장
function add(a,b){
  return a+b
}

console.log(
  add(10,5)
);

//부수효과(side effect)
function add(x,y){
  x = y;
  return x+y
};

var c = 10;
function add(x,y){
  c = x+y;
  return c
}

console.log(
  add(1,2)
);

console.clear();
var x= 10;
console.log(
  0 && true  
);
console.log(
  true && false
);
console.log(
  true && 250
);
console.log(
  0 && false
);

function hello(elm){
  var exist = elm;
  if(exist){
    (function(elm){
      elm.style.color='red'
    })(elm)
  }
  console.log(exist);
}
hello(document.getElementById('hello'))

function world(supplieOptions){
  var options = supplieOptions || {name: "Default"};
  console.log(options);
}

world('hhhhh')

var doIt = true;
var result = doIt ? "Did it" : "Didn't do it";
console.log(result);

var x = 0, y = 10, z;
z = (x++, y++);
console.log(z);

var obj = { b:2 , c:3, d:4 };
var {a, b:abc, c} = obj;
console.log(a, abc, c);

var {a:b} = {a:1};

var arr = [1, 2, 3];
var [x, y] = arr;
console.log(x, y);

var a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);

//  abc || aaa
//  bbb && abc


function hello(elm){
  return elm
}
function world(){
  var div = document.createElement('div');
  div.setAttribute('id', 'test');
  div.innerHTML = 'heeeellloo?'
  return div
}

var ee = document.getElementById('test');
var label = hello(ee)? ee : world();
document.body.append(label);


var obj = obj || {};
console.log(obj);


function getGreeting(){
  return 'heelloo world'
}

console.log(getGreeting());

function sayHello (){
  return ['한국', '중국', '미국', '러시아']
}

console.log(sayHello());

console.log(
  // moment().format('YYYY/MM/DD  hh:mm:ss') 
);
console.log(
  moment().valueOf()
);

// ip로 접속된 나라 라이브러리 사용
var country = 'America/Los_Angeles'
console.log(
  moment().tz(country).format('hh:mm:ss')
);


console.log(
  moment().format('MM-DD, YYYY, HH:mm:ss a')
);


console.log(getGreeting());
console.log(getGreeting);

var f = getGreeting;
console.log(f());

var o = {};
o.f = getGreeting;
console.log(o.f());

var arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr[1]());
console.log(arr, arr[1]);

function faa(x){
  console.log(`f 내부: x=${x}`);
  x = 5;
  console.log(`f 내부 x=${x} (할당 후)`);
}

var x = 3;
console.log(`faa()를 호출하기 전 : x=${x}`);
faa(x);
console.log(`faa()를 호출한 다음 : x = ${x}`);

function foo(o){
  o.message = `f안에서 수정함(이전 값 :${o.message})`;
}
var o = {
  message: '초기값'
}
console.log(`foo를 호출하기 전: o.message = ${o.message}`);
foo(o);
console.log(`foo를 호출한 후: o.message = ${o.message}`);

function fo2(o){
  o.message = `f에서 수정함`;
  o = {
    message: '새로운 객체'
  };
  console.log(`f내부: o.message = ${o.message} (할당후)`);
}
var o = {
  message : '초기값'
};
console.log(`f를 호출하기 전 : o.message = ${o.message}`);
fo2(o);
console.log(`f를 호출한 다음 : o.message = ${o.message}`);


var [a, b] = [1, 2];
var [c] =[[a, 2, 3]];
console.log(c);
[a, b] = [b, a];
console.log(a, b);
var {z:za, x} = {z: 55, x: 22};
console.log(za, x);

function getSentence({subect, verb, object}){
  return `${subect} ${verb} ${object}`
}
var o = {
  subject: '소희는',
  verb: '나쁘다',
  object: '성격이',
  aaaa:"매우"
}
console.log(getSentence(o));

console.clear()
// console.dir(moment)
// var {tz} = moment;
// // tz = moment.tz
// var country = 'America/Los_Angeles'
// console.log(
//   tz(country).format('hh:mm:ss')
// );

function addPrefixz(prefix, ...words){
  console.log(prefix,words);
  var prefixedWords = [];
  for(let i = 0; i < words.length ; i++){
    prefixedWords[i] = prefix + words[i]
  }
  return prefixedWords;
}

// var arr1 = ['-webkit-', 'transform', 'transition', 'animation']
console.log(
  addPrefixz('-webkit-', 'transform', 'transition', 'animation')
);