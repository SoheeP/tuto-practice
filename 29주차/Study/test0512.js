var person = { name : "tom" }
Object.preventExtensions(person);
person.age = 17;
console.log(person)
console.log(Object.isExtensible(person));

var person = { age: 17 };
console.log(person, '???????');

var person = { name: "Tom" };
Object.seal(person);
person.age = 17;
delete person.name;
// Object.defineProperty(person, "name", {enumerable : false});
console.log("name" in person);
console.log("age" in person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));

person.name = "Huck";
console.log(person);
console.log(Object.isSealed(person));

var person = { name: "Tom" };
Object.freeze(person);

console.log(Object.isFrozen(person))

function mixin(target, source){
  for(var property in source){
    if(source.hasOwnProperty(property)){
      // target[property] = source[property];
      target[property] = source //이렇게 해야 얕은복사.. ^_^...
    }
  }
  return target;
}


var obj1 = { a:1, b:2 };
var obj2 = { b:3, c:4 };
var obj = mixin(obj1, obj2);
console.log(obj);
obj.b = 5;
obj.c.b = 10;
console.log(obj)
console.log(obj2);

var person1 = {
  _name: "Tom",
  get name(){
    return this._name;
  }
};
var person2 = {};
// mixin(person2, person1);
// person2.name = "Huck";
// console.log(person2.name);
// console.log(person2);

// person1.name = "sohee";
// console.log(person1)

function upgradeMixin (target, source){
  var keys = Object.keys(source);

  for(var i = 0; i <keys.length ; i++){
    var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
    console.log(descriptor)
    Object.defineProperty(target, keys[i], descriptor)
  }
  return target;
}

upgradeMixin(person2, person1);
person2.name = "Huck";
console.log(person2);

var o = {
  name: "Tom",
  age: 18,
  marriage: false,
  data: [2, 5, null]
}
var s = JSON.stringify(o);
console.log(s, "stringify"); // json형식이라 끝에 '' 생략, 그리고 이건 String타입
var p = JSON.parse(s)
console.log(p, 'parse');

var obj = {};
var s = Symbol("heart");
var s2 = Symbol("heart2");
obj[s] = 3;
obj[s2] = 13;
obj.b = Symbol('zzzzz');
console.log(obj)
console.log(Object.getOwnPropertySymbols(obj)[0]);

Array.prototype[Symbol.for("shuffle")] = function(){
  var a = this;
  var m = a.length, t, i;
  while(m){ //m이 0이 되면 멈춘다
    i = Math.floor(Math.random()*m--); //m미만의 인덱스 i를 무작위로 골라서 하나씩 삭제
    t = a[m]; a[m] = a[i]; a[i] = t; // a[i]와 a[m]을 교환한다
  }
  return this;
}
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//값을 무작위로 섞기 때문에 실행할때마다 출력되는 값이 다르다
console.log(array[Symbol.for("shuffle")]())

var prop = "name", obj = {};
for(let i = 0; i < 6; i++){
  obj[prop+i] = i;
};
console.log(obj)

var hurry = "up";
obj = {hurry}
console.log(obj)



var newObj = {
  bye: function(v){
    this.name = v;
  }
}
var ttt = new newObj.bye("구로역")
console.log(ttt)