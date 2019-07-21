var 그럴수있지 = document.querySelector('h1');
그럴수있지.classList.add('응');

$(document).ready(function(){
  'use strict';
  console.log('main.js loaded');
  
  
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'))

  //TODO
  paper.view.draw();

  // var c = Shape.Circle(100, 200, 50);
  var c;
  for (var x=25; x<400; x+=50){
    for(var y=25; y<400; y+=50){
      c = Shape.Circle(x, y, 50);
      c.fillColor = 'green';
    }
  }
})



const Get_infomation_user_for_now = {  }
Get_infomation_user_for_now.hello = 10;

const nav_search = {  }

console.log(
  Number.MAX_VALUE
);

const dialog = "same 'refo?' ^_^..."
console.log(dialog);

const yeooo = "? \\\n\"..?응\"";
console.log(yeooo);

const yeoo = "absdfsfwefd\tfsdfa\tskjljl\rwkrk\b\v{dialog}lw;a?DSF??FD?S?D?SF?DF?AFS?";
console.log(yeoo);

const yeees = 
`
어..그런거야..?
그렇구나..크구나..
dmd
`;

console.log(yeees);

const result1 = 3 + '30';
const result2 = 3 * '30';
console.log(result1, result2);

const obj = {};
obj.color = "red";
for(let i = 0 ; i < 3; i ++){
  obj[i] = i+'나동적'
}
console.log(obj);


const aab = 'aab'
const bbb ='bbb';

let v = 10;
let b = v;
v= 5;
console.log(b);

obj[aab+bbb] = aab+bbb;
console.log(obj);

delete obj.aabbbb;
console.log(obj);

