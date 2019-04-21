function squere (x){
  return x*x;
}//함수선언

let squere1 = function(x){
  return x*x
}//함수 리터럴

let squere2 = (x) => x*x;
function test1 (x){
  let sum2 = sumTest();
  console.log(sum2)
  return Math.pow(sum2,sum2);
  function sumTest(){

    return x/(x*x)
  }
}

console.log(test1(3));

;(function(_x){
  console.log('hello world' + _x)
})(3)

;(function fact(_x){
  if( _x <= 1) return 1;
  return _x*fact(_x-1);
})(5);

function arg1 (x, y){
  console.log(arguments.callee)
}

arg1(1,2,3)


function myConcat(separator){
  var s = "";
  for(let i = 1; i < arguments.length; i++){
    s+= arguments[i];
    if(i<arguments.length - 1) s+= separator;
  }
  return s;
}

console.log(myConcat('/','apple','banana','peach'))


let tObj = {
  hello(){
    return 'world'
  }
}
console.log(tObj.hello())


let lexicalObj ={}

lexicalObj.bye = tObj.hello;
console.log(
  lexicalObj.bye()
)