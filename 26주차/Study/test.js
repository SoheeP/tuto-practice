var tom = {
  name: "Tom",
  sayHello: function(){
    console.log("Hello" + this.name)
  }
}

tom.sayHello();

var huck = { name: "Huck" };
huck.sayHello = tom.sayHello;

huck.sayHello();
console.dir(huck)

console.log(this);

document.getElementById('btn').addEventListener('click', function(){
  console.log(this)
})

function sttt (x, y){
  this.name = x;
  this.age = y;
}

var nsttt = new sttt('첨지', 30);

console.log(nsttt);

var ssiik = new sttt('쯔녕', 28);
console.log(ssiik)

function movieInfo (time, sort, title){
  this.theater = "CGV";
  this.title = title || "영화제목 입력해";
  this.time = time;
  this.sort = sort;
}

var marvel = new movieInfo("3:00", "액션", "어벤저스: 엔드게임");
console.log(marvel)

Array.prototype.firstSon = function(x){
  return this[x];
}

var fruit = ['사과', '바나나', '에이스..', '포도', '수박', '메론', '딸기']

console.log(fruit.firstSon(1));

function kkaack (){
  console.log(this)
}

kkaack();

Array.prototype.odd = function(){
  return this.filter((x, idx)=>{
    if(idx%2 === 0){
      return x
    }
  })
}



console.log(fruit.odd())
console.clear();
var g = 'global'
function parent(x){
  var g = 'parents';
  function daughter(y){
    var g = 'daughter';
    try {
    console.log(sgsg);
  }
  catch(err) {
    console.log('에러!', err)
  }
  }
  daughter();
}
parent();


console.dir(window);

//클로져!
function makeCounter (){
  var count = 0;
  return f;
  function f(){
    return count++;
  }
}

var counter = makeCounter();
// counter = f 
// retrun됐으니까 f값을 반환, 결국 f 함수를 불러옴
console.log(counter())
//이 문장은 f()실행이 되는 것

for(let i = 0; i < 5; i++){
  console.log(counter());
}