function* gen(){
  yield 1;
  yield 2;
  yield 3;
}
var iter = gen();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* createNumbers(from, to){
  while(from <= to) yield from++;
}
var iter = createNumbers(10, 20)
for(var v of iter) console.log(v);

function* fibonacci (){
  var fn1 = 0, fn2 = 1;
  while(true){
    var fnew = fn1 + fn2;
    fn1 = fn2;
    fn2 = fnew;
    
    var reset = yield fn1;
    if(reset){
      fn1 = 0; fn2 = 1;
    }
  }
}

var iter = fibonacci();
for(var i = 0; i < 10; i++){
  console.log(iter.next());
}

console.log(iter.next());
console.log(iter.next(true));
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function abc(...v){
  console.log(v, '실행')
}
abc`hello world ${1} is fanta...stic...` //실행되어따
//스트링은 이중배열로 들어오고 ${1}는 다음 배열에 들어감!

abc`a${1}b${2}c${3}`

var card = {
  suit: '하트',
  rank: 'A'
}

function Card(v1,v2,...arg){
  //생성자로 사용될 함수나 클래스는 첫번째 글자가 대문자인 파스칼네이밍 기법을 사용한다
  this.suit = v1;
  this.rank = v2;
  this.나머지 = arg
}
var card = new Card('하트', 'A','스페이스','B');
/**
 * let newObj = {};
 * newObj.__proto__ = Card.prototype;
 * Card.apply(newObj,arguments);
 * return newObj
 */
console.log(card)

var card = Object.create(Object.prototype, {
  suit: {
    value: '하트',
    writable: true,
    enumerable: true,
    configurable: true
  },
  rank: {
    value: 'a',
    writable: true,
    enumerable: true,
    configurable: true
  }
})

console.log(card);

function vibs(){}
vibs.prototype.menu = ['스테이크', '고기', '샐러드', '야채'];
let sohee = new vibs();
console.dir(vibs,'vibs')
console.log(sohee,'sohee')

console.clear();
function F(x,y){
  console.log(arguments.length)
}

console.log(F(1,2,3))

F.prototype.sleep = "졸림";
let hing = new F();

console.log(hing.sleep)

function Circle(center, radius){
  this.center = center;
  this.radius = radius;
}

// Circle.prototype.area = function(){
//   return Math.PI * this.radius * this.radius;
// }





Circle.prototype = {
  hello:function(){
    console.log('hello');
    return this
  },
  world:function(){
    console.log('world');
    return this
  },
  area : function(){
    console.log(
      Math.PI * this.radius * this.radius
    )
    return this
  }
};

var c1 = new Circle({x: 0, y:0}, 2.0);
console.log("넓이 = " + c1.area());
console.dir(Circle,'constructor')
console.dir(c1,'instance');

c1.hello().world().area(2,5.2);


function Sliper(name){
  this.name = name;
}

Sliper.prototype = {
  age: function(age){
    this.age = age;
    return this;
  },
  hobbies: function(...hobbies){
    this.hobbies = hobbies;
    return this;
  }
}

let sohee1 = new Sliper('sohee');
sohee1.age(30).hobbies(['총', '활', '방탕'])
console.log(sohee1);


var obj = {};
obj.__proto__ = {waht:'!!!'};
console.log(obj)


var objA = {
  name: "Tom",
  sayHello(){
    console.log('Hello '+this.name)
  }
}

var objB = {
  name: "Huck!"
}
objB.__proto__ = objA;
var objC = {
  name:'sohee'
};
objC.__proto__ = objB;
objC.sayHello();
console.dir(objC);

function Fa(){};
var obj = new Fa();
console.log(Object.getPrototypeOf(obj));
var obj={
  a:1,
  b:2
}
console.log(
  Object.keys(obj)
)
console.log(
  Object.__proto__
);
console.clear();
function soF(){}
console.dir(soF);

function F1(){};
var f2 = new F1();
console.dir(f2.constuctor)

console.dir(F1.prototype.__proto__)
console.log(sohee1 instanceof Sliper,'fffff');

function C1(){}
C1.prototype = {
  constructor:C1,
  name:"what!!"
}
var c = new C1();
console.log(c.__proto__.constuctor)
console.log(c instanceof C1)

var newnewobj = {
  name: '런치',
}
Object.seal(newnewobj);
newnewobj.name = '디너'
console.log(newnewobj)
