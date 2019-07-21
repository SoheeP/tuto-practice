var str = "33.3a";
console.log(Number(str));
console.log(parseInt(str, 10) , '아니야!');
var d = new Date();
var timestamp = d.valueOf();
var date = new Date(timestamp);
console.log(date);

var ho = document.getElementById('ho');

// var n ;
// if(ho){
//   n = ho;
// }else{
//   n = 'not'
// };

var n = (ho)? ho:'not';

console.log(n);



function fn(v){
  return v
}
console.clear();

var obj = {
  a:1
}

var a = obj;
var b = obj;
var c = obj;

console.log(obj);

obj.b =10;
a.c =20;
console.log(a);
console.log(b);

var abc = fn;

console.log(
  abc('a')
);
fn.a = 10;
console.dir(abc);



var num = 10;
var an = num;
var bn = num;

console.log(
  an = an+10
);
console.log(an);
console.log(
  bn
);

var a = 1;
var b = a; 
a = 2;
console.log(b);

function change (a){
  a = 5;
  return a
}
a = 3;
change(a);
console.log(a);
console.log( change(a) );

var c = 10;

function cChange(b){
  c = b;
}
cChange(11);
console.log(c);

var o = {a : 1};
var p = o;
o.a = 2;
console.log(p);

var q = o ;
p.a = 10;
console.log(q);


var z = {a: 1};
var g = {a: 1};

console.log( g === z);

var v = z;
console.log( v);
console.log( v === z );

z = {a: 1}; // 재할당
console.log( v === z);
var q = {a: 1};
console.log(q === {a: 1}); // 또 새로운거.....ㅠㅠㅠ...ㅠ..ㅠ.ㅠ.ㅠ...ㅠ...ㅠ...ㅠ.......선언..된..객체...

function change_o(o){
  o.a = 999;
}

var o = {a: 1};
change_o(o);
console.log(o);

function changeColor(elm,color){
  elm.style.color = color;
}

var newElm = document.getElementById('test').cloneNode(true);
changeColor(newElm,'red');
document.body.append(newElm)

// mkeCloneNode(elm,{id:null,class:"abc"})
// findParent(elm,{class:"abc",title:'hello'})

console.clear();
// let abb = 10;
// {
//   let abb =20;
//   {
//     let abb =30;
//     console.log(abb);
//   }
//   console.log(abb);
// }
// console.log(abb);

// let bb;
// {
//   bb =10;
// }
// console.log(bb);

var a = 0;
// while (a--) console.log(a); 0은 false
while(a < 10){
  console.log(a);
  a++;
}
// console.log(a);

for(var i = 10 ;i--;){
  console.log(i);
}
console.clear();

function rand(m, n){
  return m + Math.floor((n - m + 1) * Math.random());
}

function randFace (){
  var arr = ["crown", "anchor", "heart", "spade", "club", "diamond"];
  return arr[rand(0,arr.length-1)] 
}
console.log(randFace());


var a = 10;
a= false
do{
  // a--;
  console.log(a);
} while(a);
var arr = [];
for(var i = 0; i <3; i++){
  var rr = randFace();
  if(rr !== 'crown'){
    arr.push(rr)
  }
  // arr.push(randFace())
}
console.log(arr);

var day = ['일', '월', '화', '슈', '목','금','토' ];
var getdayyyy = new Date().getDay();
if(getdayyyy === 0){
  console.log(`${day[getdayyyy]}용ㅇㅇ일 출근`);
} else {
  console.log(`^_^ 아직 ${day[getdayyyy]}ㅇ요일ㅇ 이다ㅏ`);
}

for (let temp, i = 0, j = 1 ; j < 30 ; j = i + temp){
  temp = i, i = j; 
  console.log(j);
}

let s = '3';
// for(;s.length < 10; s = ''+s);

// console.log(s);

// {
//   let a = 10;
//   while(a--){
//     console.log(a);
//   }
// }


var totalBet = 13;

switch(totalBet){
  case 7:
    totalBet = 'hello?';
    break;
  case 11:
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

console.log(totalBet);

function Player(){
  this.name ='Thomas';
  this.rank =  'Midshipman'
  this.age= 25
}
// var player = { name : 'Thomas', rank: 'Midshipman', age: 25 };
Player.prototype.hello  = 'world';

var player =  new Player();
console.log(player);
for(let prop in player){
  if(!player.hasOwnProperty(prop)) continue;
  console.log(prop + ':' + player[prop]);
}

var hand = [randFace(), randFace(), randFace()];
for(let face of hand){
  console.log(`you rolled ... ${face}!`);
}

// for (var i = 0; i < 100; i++) {
//   if (i >= 1) {
//     console.log('어', i);
//     continue;
//   } 
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
//   console.log('응 했잖아', i);
// }

for (var i = 0; i < 100; i++) {
  if (i === 3) {
    console.log('is 심봐뜨ㅏ');
    break;
  } 
  console.log('어', i);
}

var arr = ['con','wow','cow','oh','good','feel'];
var new_arr = [];
for(var i = 0; i < arr.length ; i++){
  if(arr[i] === 'cow' || arr[i] === 'oh'){
    new_arr.push(arr[i])
  }
}
console.log(arr);
console.log(new_arr);

var newAr  = arr.filter((x) => x ==='cow' || x === 'oh');
console.log(newAr);

for(var i = arr.length-1; i >= 0; i--){
  if(arr[i] === 'cow' || arr[i] === 'oh'){
    arr.splice(i, 1)
  }
}
console.log(arr);

var x, y;
y = x = (3*5);



var c = 10;

// function *(){
//   {...}
//   return num
// }


var x = 2;
var r1 = x++ + x++;
console.log(r1);
console.log(x);
//x = 4로 평가된 상태
var r2 = ++x + ++x;
console.log(r2);
// x = 6
var r3 = x++ + ++x;
console.log(r3);
// x = 8
var r4 = ++x + x++;
console.log(r4);
console.log(x, 'x');

var y = 10;
var r5 = y-- + y--; //19
var r6 = --y + --y; //13
var r7 = y-- + --y; //10
var r8 = --y + y--; //6

console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);


var n = 0;
// while(true){
//   n += 0.1 ;
//   if(n===0.3) break;
// } 
//무한루프^_^ 퉤

while(true){
  n += 0.1 ;
  if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

function nIsEqual(a, b){
  return Math.abs(a - b) < Number.EPSILON;
}

nIsEqual(0.1+0.2,0.3)


if([]){
  console.log('true');
}
if({}){
  console.log('true');
}