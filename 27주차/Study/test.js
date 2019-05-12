// var myApp = myApp || {}
// myApp.name = "Tom";
// myApp.showname = function(){
//   return this.name;
// }

// myApp.globalVariable = {};

// myApp.globalVariable.count = 0;

// var x = "global x";
// (function(){
//   var x = "local x";
//   var y = "local y";
// })();

// console.log(x);
// console.log(y)

var Module = Module || {};
(function (_Module) {
  var name = "No name"; //밖에서 접근을 못하는 변수(프라이빗 변수)
  function getName() {
    return name;
    //프라이빗 함수
  }
  _Module.showname = function () {
    console.log(getName());
  }
  //메소드로 접근이 가능 > 퍼블릭 함수
  _Module.setName = function (x) {
    name = x;
  }
})(Module);
//객체가 들어오면 객체를 참조..
//이렇게 함수가 은닉화되는 것을 모듈 패턴이라고 함

Module.setName('쯘녕^_^;')
Module.showname();

function say(greetings, honorifics) {
  console.log(`this`, this)
  console.log(`${greetings} ${honorifics} ${this.name}`)
}

var tom = {
  name: "Tom"
};
var becky = {
  name: "becky"
};

// say('비구니', '쯔녕이');
say.call(tom, '비구니', '쯔녕이')
say.apply(becky, ['비구니', '쯔녕이']);

function age(x, y) {
  // console.log(arguments.split(' '))
  var a = Array.prototype.slice.call(arguments);
  console.log(a.slice(1, 2))
  //모든 인수를 가져오는 method..? built in함수....일걸?
}

age('a', 'b', 'c')

function fa(x) {
  fa.count = 0;
  for (let i = 0; i < 10; i++) {
    console.log(i, '흥')
    fa.count = i
  }
  console.log(fa.count)
}
fa.sname = '첨지';
console.log(fa.sname)
//name 함수의 이름을 나타내는 기본으로 생성되는 프로퍼티, 그래서 다른 이름을 써줘야댐
console.dir(fa)
fa();

function fibonacci(n) {
  if (n < 2) return n;
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2)
  };
  return fibonacci[n]
}
for (let i = 0; i < 21; i++) {
  console.log(i + ':' + fibonacci(i))
}
console.dir(fibonacci)


function newObj() {

};
newObj.hello = 'world';
let bbb = new newObj();

console.dir(bbb);
//위 코드는 정적 프로퍼티 설명

console.clear();
function concatString(str1, str2, fn) {
  return fn(str1, str2);
}

console.log(
  concatString('a', 'b', (a,b) => ''+a+b)
)

function _filter(x, fn){
  if(fn(x)) return x;
  return null;
}
console.log(
  _filter(5, (x)=> x<3)
  )

function compose(f, g){
  return function(x){
    return f(g(x))
  }
};

var square = function(x){ return x*x };
var add1 = function(x){ return x+1 }
var h = compose(square, add1);
console.log(h(2))

//확장형
function compose1(f, g){
  return function(){
    return f.call(this, g.apply(this, arguments))
  }
}

//28일
function product(x, y){
  return x*y
}

function product2(y){
  return product(2, y)
}

// console.log(product2(3))

product2 = product.bind(null, 2);

function partial(f){
  var args = arguments;
  let a = Array.prototype.slice.call(args, 1)
  console.log(a);

}
partial(1,2,3,4,5)


function bbab(){
  this.slice = function(x,y){
    console.log('slide')
  }
}

console.log(
[1,2,3,4,5].slice(1)
)

var obj = {
  name: '얄첨지',
  yell: function(x,y){
    console.log(this.name, x,y)
  }
}
var obj2 = {
  name: '수행이 부족하도다 ㅠㅠ'
}

obj.yell('비구니','아메바');
obj.yell.call(obj2, '비구니...','에바');

var pow = function(exponent){
  return function(base){
    return Math.pow(base, exponent);
  }
}

let pow2 = pow(2);
let pow33 = pow2(3);

let pow42 = pow2(4);
console.log(
  pow(2)(3) // 이모양새는 잘안쓰고 변수에 담아서 실행
)

var sum = function(a, b){ return a+b };
var a = [1, 2, 3, 4];
var abs_a = pow(2)(a.map(pow(2)).reduce(sum));
console.log(abs_a)

/** 콜백*/
function f1(fn){
  return (
    '박'+fn()
    )
}

console.log(f1(function(){
  return '첨지 배고픔'
}))


var obj = {
  say:function(){
    console.log(this,'say');
    let that = this;

    function say2(x){
      console.log(x,'say2')
    }
    say2(that)
  }
}
obj.say()



function lastF(z,...arr){
  console.log(z)
  return arr
}

console.log(lastF('a', 'b', 'c', 1, 2, 3))

function multiple (a, b = fa(), c){
  var c = c || 3;
  return a * b + c
};

function fa(){
  return 5
};

console.log(
  multiple(3)
)

var chumji = [1, 2, 3]
console.log(chumji)

var iter = chumji[Symbol.iterator]();

console.log(
  iter.next()
)

console.log(
  iter.next()
)

console.log(
  iter.next()
)

console.log(
  iter.next()
)
console.log(
  iter.next()
)

function makeIterator(array){
  var index = 0;
  return {
    next: function(){
      if(index < array.length){
        return {value: array[index++], done: false};
      } else {
        return {value: undefined, done: true};
      }
    }
  }
}

var iter = makeIterator(['a', 'b', 'c']);
console.log(
  iter.next()
)
var a = [5, 4, 3];
for(var v of a) console.log(v)


console.dir(obj)

for(var v in obj) console.log(v)