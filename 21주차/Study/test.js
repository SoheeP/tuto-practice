function yadoran(config){
  return (config.x || 300) + config.y;
}
//config.x 가 값이 없으면 300(default)을 사용


let configObj = {
  x : 250,
  y : 360
}

console.log(yadoran(configObj))

let nasi = "balchang-e"

function ff(){
  nasi = "sibal";
}
ff();
console.log(nasi)

const c = {
  x : 'eee',
  y : '222'
}

// c = {
//   a: 123,
//   b: '333'
// } 
//객체 자체를 바꾸는거라 안됌(키를 없애고 추가하거나 값을 바꾸거나 키 자체를 추가하거나 OK)

// console.log(c)

const arr = [1, 2, 3, 4]

arr.push('OO');

console.log(arr);

arr[2] = 555;

console.log(arr)


;(function(){
  console.log('hello')
})();//빠르고 로드도 되지만 내가 부를수없어...홍길동이냐...
//document.ready 먼저 해야함! 안그럼 걔네보다 훨씬 빨리 로딩될수있음 ;_;

var square = function sq(x){
  return x * x
}

console.dir(square)

//익혀두기
let name = {
  firstName : 'sohee',
  surName : 'park',
  fullName(){ //value property가 function일때만 이런식으로 쓸수잇음 (ES6);
    let that = this;
    function getInnerFullName(that){
      console.log(that,'innerFull') // 여기서 this만 쓰면 window
    }
    getInnerFullName(that)
    return this.firstName + this.surName
  },
  test(){
    let test1 = ()=>{ //화살표함수는 첨부터 선언이 잘안됌(?) 이경우엔 this가 name
      console.log(this)
    }
    test1()
  }
}

console.log(
  name.fullName()
)
name.test();

let ch = {
  x: 33,
  y: 44,
  calc(a, b){
    this.x = this.x + a
    this.y = this.y + b;
  }
}
console.log(ch)
ch.calc(2, 10);
console.log(ch)

let setGraphBar ={
  height: 5,
  background: 'red',
  setValue : function(h, bg){
    this.height = (h || this.height);
    this.background = (bg || this.background);
  }
}


// 'height:129px ; ';
for ( key in setGraphBar){
  console.log(typeof key)
}

setGraphBar.setValue(50,'blue');

function setBt(){
  document.querySelector(".bar").style.height = `${setGraphBar.height}%`;
  document.querySelector(".bar").style.background = `${setGraphBar.background}`;
}


let tue = 0;
function baebsae(){
  console.log(tue)
  tue ++;
  if(tue == 5){
    return ;
  } else {
    baebsae()
  }
}
baebsae()

function Person (name, age){
  this.name = name;
  this.age = age;
}

console.log(Person('ss', 13))

let foo = new Person('오징오징어!', 25);

console.log(foo)

foo.body = 'sexy'
console.log(foo)

let octo = new Person('문어', 80);

console.log(octo)

octo.changeAge = function(newAge){
  this.age = newAge;
}

octo.changeAge(81);
console.log(octo)

var now = new Date();
var then = new Date(2008, 5, 10);
console.log(now - then)

// //countDown!!
// let nowIndex = 0;
// function countDown (userTime){
//   let clVal = setInterval(function(){
//     console.log(userTime);
//     userTime --;
//     // nowIndex ++;
//     if(nowIndex == userTime ){
//       clearInterval(clVal)
//       alert(`이벤트종료!`)
//     }  
//   }, 1000)
// }

// countDown(5)

console.clear();
let moosslmo = new Function('x, y', 'return x + y')
console.log(moosslmo(2, 3)) 
let test2 = [1, '',3, 4, 5]
test2.length = 3
console.log(test2);
delete test2[0]
console.log(test2)
let a = 2
// var res = a++ + 2 ;
// console.log(res)
console.log(a, 'a')
let b = a++;
console.log(b, 'b')
console.log(a, 'a')

let text1 = "Hello";
console.log(text1.concat("world"))

console.log(
  text1.endsWith('el', 3)
)