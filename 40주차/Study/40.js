
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