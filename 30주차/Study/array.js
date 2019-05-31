console.log([1, 2, 3].copyWithin(0, 1, 3))
console.log([4, 5, 6].fill(function nameA() {}, 0, 3))

console.log([1, 2, 3, 4, 5, 6, 7, 'a', 'c', 'b'].reverse())

var randomArr = [1, 4, 25, 32, 50, 30, 2, 3, 7]

console.log(randomArr.sort((x, y) => x - y))

var a = [1, 2, 3, 4, 5]
console.log(a.splice(1, 3, ['a', 'b']));
console.log(a, 'a')


console.log(randomArr.concat(a))

console.log(randomArr.join('-'))

var a = [1, 2, 3, 4, 5]
console.log(a.slice(2, 3))
console.log(a, '....?')

console.log(a.toString());
console.log(a.entries())

console.log(a.every(x => {
  return x > 3
}))

var strArr = ['apple', 'app', 'argument', 'air', 'bad'];

console.log(strArr.every((x, idx) => {
  console.log(
    x.indexOf('a'), idx
  )
  return x.indexOf('a') > -1
}))

console.log(strArr.filter(x => {
  return x.indexOf('pp') > -1
}))

console.log(strArr.find(x => {
  return x == 'app';
}))

strArr.forEach(x =>
  console.log(x.toUpperCase())
);

var vari1 = strArr.map(function (x, idx, arr) {
  arr[idx] = 'a';
  // console.log(`${x}, ${idx}, `, arr)
})
console.log(strArr);

var strArr = [1, 2, 3, 4, 5];

var vari1 = strArr.map((x, y, z) => {
  if (x == 3) {
    return x
  }
})

console.log(vari1)
console.log(strArr)
console.clear();
var numArr = [1, 2, 3, 4, 5];

var powArr = numArr.map(x => x * x);
console.log(powArr);

var reduceArr = numArr.reduce((x, y) => x + y, 1)

console.log(reduceArr);


var strArr = ['힝구', '홍구', 'ㅠㅠ', '?'];
console.log(
  strArr.reduce((x, y) => {
    x[y] = y.length;// {힝구:2,홍구:2}
    return x;
  }, {})
);

console.log(
  numArr.some(x => x == 6)
);

console.log(strArr.splice(1, 1));
console.log(strArr, 'ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ')

function compareFunc(key){
  return function(a, b){
    return a[key] - b[key]
  }
}

var persons = [
  {
    name: "Tom",
    age: 17
  }, {
    name: "Huck",
    age: 18
  }, {
    name: "Becky",
    age: 16
  }
]

console.log(
  persons.sort(compareFunc('age'))
);

var ababc = ["a", "b", "c"];
console.log(ababc.concat(["g", "a"],["d", "f", ["x", "y", ["z"]]]));

var randomArr1 = [1, 5, 6, 3, 4,125344, 6666, 22]
console.log(
  randomArr1.slice(-2, 4)
);

console.log(
  ababc.map(x => {
    if(x.indexOf('b') > -1) return x;
  })
);

console.log(
  ["a", "b", "c", date].toString()
);

var date = new Date();


var testArr = [1, 2, 3];
testArr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
  arr[idx] = 'hello'; //testArr을 참조하고 있고 그녀석의 인덱스 값에 'hello'를 값을 재할당한다.
})

console.log(testArr);

var sqrtArr = [1, 4, 9, 16, 25]
console.log(
  sqrtArr.map(Math.sqrt)
);

var persons = [
  {
    name: "Tom",
    age: 17
  }, 
  {
    name: "Huck",
    age: 18
  }, 
  {
    name: "Becky",
    age: 16
  }
];
var names = persons.map(obj => obj.name);
var ages = persons.map(obj => obj.age).map((x)=> (x>16)?x:false)
console.log(
  names, ages
);

function abb(){
  let a = 10;
  function b(){
    let b = a;
    function c(){
      let c = b;
  
    }
    c()
  }
  b()
}

abb()

var x = new Array(3);
for(var i = 0 ; i< 3; i++){
  x[i] = new Array(3)
}
for(var count = 1, i = 0; i <3 ; i++){
  for(var j = 0; j<3; j++){
    x[i][j] = count++;
  }
}
console.log(x)