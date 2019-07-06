console.log('heelllloooowooorld');

function elt(name, attributes) {
  var node = document.createElement(name);
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string") {
      child = document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}

let elBox = document.getElementById('box');
elBox.addEventListener('click', function (e) {
  e.currentTarget.style.backgroundColor = "red";
})

// function hello(){
//   (function(){
//     console.log('world');
//   })()
// }

// hello();

// function foo(text,fn){
//   console.log(text);

//   fn(text)
// }

// foo('foo',function(parentLexicalTxt){
//   console.log(parentLexicalTxt);
//   console.log('poo');
// })


function 대충(text, cb) {
  cb(text);
}



// event
대충('미안', 대충미안);




//exec fn

function 대충미안(hingtext) {
  console.log('대충쓰!', hingtext);
}

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
btn.addEventListener('click', putText);
//btn.addEventListener('click', putText2); - 여러개붙일수있다
btn2.addEventListener('click', putText);

function putText(e) {
  let curTarget = e.currentTarget;
  curTarget.innerHTML = curTarget.nodeName + curTarget.id;
}

let ya = document.getElementById('clickNremove');
// ya.addEventListener('click', function(){
//   console.log(arguments.callee);

//   ya.removeEventListener('click', arguments.callee)
// })

ya.addEventListener('click', cbCall)


function cbCall() {
  console.log('hleeeo');
  ya.removeEventListener('click', cbCall)
}

// 


var box = elt("div", {
  class: 'box'
}, "Javascript");
var boxOffsetX, boxOffsetY;
document.body.appendChild(box);


box.addEventListener("mousedown", function mouseDownListener(e) {
  boxOffsetX = e.offsetX;
  boxOffsetY = e.offsetY;
  document.addEventListener("mousemove", mouseMoveLister);
})

document.addEventListener("mouseup", function mouseUpListener(e) {
  document.removeEventListener("mousemove", mouseMoveLister)
})

function mouseMoveLister(e) {
  // console.log(e.pageX, e.pageY);
  box.style.left = e.pageX - boxOffsetX + 'px';
  box.style.top = e.pageY - boxOffsetY + 'px';
}

// document.addEventListener("keydown", showKey)

// var display = document.getElementById("display");
// function showKey(e){
//   var prop = ["altKey", "ctrlKey", "shiftKey", "metaKey", "key", "code", "keyCode"];
//   var s = "";
//   for(var i in prop){
//     s += "<br>" + prop[i] + ":" + e[prop[i]];
//   }
//   s += "-> " + String.fromCharCode(e.keyCode);
//   display.innerHTML = s;
// }

var outer = document.getElementById('outer');
var inner2 = document.getElementById('inner2');
outer.addEventListener('click', function (e) {
  console.log('outer bubbling');
}, false);
outer.addEventListener('click', function (e) {
  console.log('outer capturing');
}, true);
inner2.addEventListener('click', function (e) {
  console.log('inner2(1) bubble');
  e.stopImmediatePropagation(); // 이벤트의 전파를 취소한다 (immediate는 일시정지..)
}, false)
inner2.addEventListener('click', function (e) {
  console.log('inner2(2) bubble bubble');
}, false)
var inner1 = document.getElementById('inner1');
inner1.addEventListener('click', function (e) {
  console.log('inner1 bubble');
}, false)


var obj = {
  name: "TOM"
};

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello! " + this.name);
}

var person = new Person("Becky");

console.log(person);
person.sayHello();

var btn22 = document.getElementById('btn2');
btn22.addEventListener('click', function (e) {
  console.log(this.name);
}.bind(obj));

var button = document.getElementById('button');
// button.addEventListener("click", person.sayHello.bind(person))
button.addEventListener("click", function (e) {
  person.sayHello();
})


function Foo(name) {
  this.name = name;
  this.sayHi = () => {
    (() => {
      console.log("Hi " + this.name)
    })();
  }
}
var foo = new Foo("Steve");
foo.sayHi();




var module = {
  x: 42,
  getX: function () {
    console.log(this.x, 'me');
    (() => {
      console.log(this.x);
    })()
  }
}

function getElm(attr) {
  const elm = document.querySelectorAll(attr);
  return (elm.length > 1) ? Array.from(elm) : elm[0]
}


module.getX()
var unboundGetX = module.getX;
unboundGetX()

var boundGetX = unboundGetX.bind(window);
boundGetX();





var handleBtn = getElm('#handlebtn');

var obj = {
  name: "이객체!!!",
  age: 30,
  handleEvent: function () {
    console.log("Hi " + this.name);
    console.log(this.hello());
  },
  hello: function () {
    return this.age
  }
};
handleBtn.addEventListener("click", obj);

var ageUpBtn = getElm('#up');

ageUpBtn.addEventListener('click', function (e) {
  console.log('up!');
  obj.age++;
})

var box2 = getElm("#box2");
box2.addEventListener("click", function (e) {
  changeBgcolor(e, "red")
})

function changeBgcolor(e, color) {
  e.currentTarget.style.backgroundColor = color;
}

var box3 = getElm("#box3");
box3.addEventListener("click", changeFontcolor("orange"));

function changeFontcolor(color) {
  return function (e) {
    e.currentTarget.style.color = color;
  }
}

var event = document.createEvent("HTMLEvents");
event.initEvent("mouseover", true, false);
var button = getElm("#box4");
button.addEventListener("mouseover", function (e) {
  getElm('.boxbox').classList.add('on')
})



// button.click()
// console.log('a');
// setTimeout(
//   function () {
//     console.log('b');
//   }, 0
// );
// console.log('c');

// function sleep (callback){
//   setTimeout(function(){
//     callback();
//   }, 1000)
// }

// sleep(function(){
//   console.log('a');
//   sleep(function(){
//     console.log('b');
//     sleep(function(){
//       console.log('c');
//     })
//   })
// })

// var promise = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     var name = prompt('이름을 입력해');
//     resolve(name);
//   }, 1000);
// });

// promise.then(function(data){
//   setTimeout(function(){
//     console.log(`안녕? ${data} ^^_^_^_^_^^_^`);
//   }, 1000)
// })

// var promise = new Promise(function(res, rej){
//   setTimeout(() => {
//     var n = parseInt(prompt('10미만의 숫자를 입력하십시오'));
//     if( n <= 10){
//       res(n);
//     } else {
//       rej(`오류: ${n}은 10 이상입니다.`)
//     }
//   }, 1000);
// })

// promise.then(function(n){
//   console.log(`잘입력했습니다. ${n}입니다.`);
// })
// .catch(function(err){
//   console.log(err);
// })

// promise.then(function (n) {
//   console.log(`잘입력했습니다. ${n}입니다.`);
// }, function (err) {
//   console.log(err);
// });

function buyAsync(mymoney) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var payment = parseInt(prompt('지불하고자 하는 금액을 입력하십시오'));
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`잔액은 ${mymoney}원입니다. 구매할 수 없습니다.`)
      }
    }, 1000)
  })
}

// buyAsync(500)
//   .then(function (balance) {
//     console.log(`잔액은 ${balance}입니다.`);
//     return buyAsync(balance);
//   })
//   .then(function (balance) {
//     console.log(`잔액은 ${balance}입니다.`);
//     return buyAsync(balance);
//   })
//   .then(function (balance) {
//     console.log(`잔액은 ${balance}입니다.`);
//     return buyAsync(balance);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });



function doAxios(url) {
  return axios({
      method: 'get',
      url: url,
    })
}


// doAxios(`https://api.bithumb.com/public/ticker/ETH`)    .then(function (response) {
//   console.log(response.data.data.opening_price,'1');
// });
// doAxios('https://api.bithumb.com/public/ticker/BTC')    .then(function (response) {
//   console.log(response.data.data.opening_price,'2');
// });

// async function power() {
//   await
// }


function buyAsyncAll(name,mymoney) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var payment = parseInt(prompt(`${name}님 지불하고자 하는 금액을 입력하십시오`));
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${name} ${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`${name} 잔액은 ${mymoney}원입니다. 구매할 수 없습니다.`)
      }
    }, 1000)
  })
}


// Promise.all([
//   buyAsyncAll("Tom", 500),
//   buyAsyncAll("Huck", 600),
//   buyAsyncAll("Becky", 1000)
// ])
// .then(function(balance){
//   console.log(balance);
// })
// .catch(function(err){
//   console.log(err);
// })

var req = new XMLHttpRequest();



req.open("GET", "data.txt");
req.send(null);

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    getElm('#view').innerHTML = req.responseText;
  }
}
