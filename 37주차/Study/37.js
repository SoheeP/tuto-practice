function Person(name){
  Object.defineProperty(this, "name", {
    get: function(){
      return name;
    },
    set: function(newName){
      name = newName;
    },
    enumerable: true,
    configurable: true,
  })
}
Person.prototype.sayName = function(){
  console.log(this.name);
};

var person = new Person("Tom");
console.log(person.name);
person.name = "Huck";
console.log(person.name);




function Ellipse(a, b){
  this.a = a;
  this.b = b;
}

Ellipse.prototype.getArea = function(){
  return Math.PI * this.a * this.b;
};
Ellipse.prototype.toString = function(){
  return "Ellipse " + this.a + " " + this.b;
};

var ellipse = new Ellipse(5, 3);

console.dir(Ellipse);
console.log(ellipse);
console.log(ellipse.getArea());
console.log(ellipse.toString());


// function Circle(r){
//   this.a = r;
//   this.b = r;
// }



function Circle(r){
  Ellipse.call(this, r, r)
}


/**
 * ^_^시러
 * //Circle.prototype 에 복사
Circle.prototype = Object.create(Ellipse.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Circle,
    writable: true
  }
})

//필요한 것만 덮어쓰고 있는 것
Circle.prototype.toString = function(){
  return "Circle " + this.a + " " + this.b
}
 */

Circle.prototype = new Ellipse();
//밑에 circle = new Circle이 될 수 있도록 constructor를 바꿔줌
Circle.prototype.constructor = Circle;

Circle.prototype.toString = function(){
  var str = Ellipse.prototype.toString.call(this);
  return str.replace("Ellipse", "Circle")
}



var circle = new Circle(2);

console.log(circle.getArea());
console.log(circle.toString());



