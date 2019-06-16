var person = {
  _name: "Tom",
  get name(){
    return this._name;
  },
  set name(value){
    var str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  }
};
console.log(person.name);
person.name = "huck";
console.log(person.name);

delete person._name;
console.log(person);

//데카르트 좌표계(직교 좌표계)
var point = {
  x: 1.0,
  y: 1.0,
  get r(){ return Math.sqrt(this.x * this.x + this.y * this.y) },
  get theta(){ return Math.atan2(this.y, this.x) },
  set polarCoordinates(pc){
    this.x = pc.r*Math.cos(pc.theta);
    this.y = pc.r*Math.sin(pc.theta);
  }
};
console.log(point.r);
console.log(point.theta);

point.polarCoordinates = {
  r: 2,
  theta: Math.PI/4
};
console.log(point);

var person = (function(){
  var _name = "Tom";
  // axios({
  //   method: 'get',
  //   url: 'http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=125',
  // })
  //   .then(function (response) {
  //     console.log(
  //       response.data
  //     )
  //   });


  return {
    get name(){
      return _name;
    },
    set name(value){
      var str = value.charAt(0).toUpperCase() + value.substring(1);
      _name = str;
    }
  }
})();
console.log(person.name)
console.log(person._name);
person.name = "appeach";
console.log(person.name);
var tom = {
  name: "Tom",
}
console.log(Object.getOwnPropertyDescriptor(tom, "name"));

var obj = {};
Object.defineProperty(obj, "name", {
  value: "Tom",
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

var person = { name: "Tom" };
Object.defineProperty(person, "name", {
  writable: false
});
console.log(Object.getOwnPropertyDescriptor(person, "name"));

person.name = "Huck";
console.log(person.name);

var person = {
  name: "Tom",
  age: 17,
  sayHello(){
    console.log("Hello!")
  },
  sayBye(){
    console.log("BYE!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }
}
Object.defineProperty(person, "sayHello", {
  enumerable: false,
});
for (var p in person) console.log(p);

var person1 = {
  name: "sohee"
}
var person2 = Object.create(person1)

console.dir(person2);

console.clear();


var group = {
  groupName: "Tennis circle",
  sayGroupName: function(){
    console.log("belong to "+ this.groupName)
  }
}
var person = Object.create(group, {
  name: {
    value: "Tom",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 18,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  sayName: {
    value: function(){
      console.log("I'm " +this.name)
    },
    writable: true,
    enumerable: false,
    configurable: true,
  }
})

console.log(person);
console.log(person.groupName);
console.log(person.sayGroupName);
person.sayName()

console.log(Object.getOwnPropertyDescriptor(person, "sayName"));

for(var p in person) console.log(p);

var person = {name:"tom",age:17};
var person2 = Object.create(person1);
person2.name = "Huck";
for(var p in person2) console.log(p);


console.dir(person);

var a = [0,1,2,3,4];
console.dir(a)

console.log(Object.keys(person));
