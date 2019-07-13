// function Circle(center, radius){
//   this.center = center;
//   this.radius = radius;
// };

// Circle.prototype.area = function(){
//   return Math.PI * this.radius * this.radius;
// }

String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}



console.log(
  "와 나는 오늘 오지게 배부르게 먹었따.".reverse()
);

var module = (function(){

  class Circle {
    //초기화
    constructor (center, radius){
      this.center = center;
      this.radius = radius;
    }
    //메서드
    area(){
      return Math.PI * this.radius * this.radius
    }
  
    static hello(){
      console.log('hlelo');
    }
  
  }
  
  var c = new Circle({x: 0 , y: 0}, 2);
  console.log(c.area());
  
  
  console.log(
    Circle.hello()
  );
  
  
  class Menu {
    constructor(){
  
    }
    add(val1,val2){
      return val1+val2
    }
  
  }
  
  class Son extends Menu{
  
    hello(x1,x2){
      return this.add(x1,x2)
    }
  
  }
  
  var son = new Son();
  
  console.dir(
    son
  );
  console.log(
    son.hello(5,6)
  );
  
  
  class signupPage extends Menu{
  
  }
})();


function hello(){
  function a(){

  } // privacy


  return {
    ya:"wow"
  }
}


console.dir(hello);
console.clear();

class Person {
  constructor (name){
    this.name = name;
  };

  get name(){
    return this._name;
  }

  set name(value){
    this._name = value;
  }
  
  sayName(){
    console.log(this.name);
  }
}

var person = new Person("Tom");
console.dir(person);
person.name = "Tom";

// console.log(person.sayName());
// person.name('Hick');


class Poo {
  constructor(name){
    this.name = name;
    Poo.personCount++;
  }

  static count(){
    return Poo.personCount;
  }
}

Poo.personCount = 0;

var person1 = new Poo();
console.log(Poo.count());
var person2 = new Poo();
console.log(Poo.count());

class Circle1 {
  constructor (center, radius){
    this.center = center;
    this.radius = radius;
  }
  //메서드
  area(){
    return Math.PI * this.radius * this.radius
  }
  toString(){
    return "Circle" + "중심점( " + this.center.x +", "+ this.center.y +") ,반지름 = " + this.radius;
  }
}

class Ball extends Circle1 {
  move(dx, dy){
    this.center.x += dx;
    this.center.y += dy;
  }
  toString(){
    var str = super.toString();
    console.log(str);
    return str.replace("Circle", "Ball")
  }
}

var ball = new Ball({x: 0, y: 0}, 2);
// console.log(ball.toString());
// console.log(ball.area());
// ball.move(1, 2);
// console.log(ball.toString());


// console.clear();

//컨스트럭터에 ㅁㅅㄷ? 넣고 상속?
// class Hello {
//   constructor(params) {
//     //??초기화
//     console.log('hellow ㅊㄱㅎ');
//   }
//   name(value){
//     return value;
//   }
// }

// class SonOfHello extends Hello{
//   constructor(){
//     super();
//     console.log('SonOfHello');
//   }
//   methooood(val){
//     console.log(this.name(val));
//   }
// }

// var yahoo = new SonOfHello();
// var yahoo1 = new SonOfHello();
// yahoo.methooood("오징어...")

console.log(ball.toString());