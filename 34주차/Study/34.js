var name = "Tom sawyer";
var result = name.replace(/(\w+)\s(\w+)/, '$2 $1');
console.log(result);

console.log(
  "172.20.51.65".split('.')
);

var names = "Tom Sawyer ; Huckleberry Finn ;Becky Thatcher";
var list = names.replace(/^\s*|\s*$/g, "").split(/\s*;\s*/);
console.log(list);

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = "Tom : 010-1234-1552\nHuck: 020-550-8493\nBecky: 030-4321-9876";
// console.log(
//   tel.exec(text)
// );
// console.log(
//   tel.exec(text)
// );
// console.log(
//   tel.exec(text)
// );
// => lastIndex가 바뀌어서 적용된다


// while((result = tel.exec(text)) != null){
//   console.log(result[0],result[1],result[2],result[3]);
// }

console.log(tel.lastIndex);
var result = tel.exec(text);
console.log(result);
console.log(tel.lastIndex);
result = tel.exec(text);
console.log(tel.lastIndex);
console.log(result);
tel.lastIndex = 0;
result = tel.exec(text);
console.log(result);

// console.log(text.replace(tel, "$3-$1-$2"));


// let shout = setInterval(()=>{
//   console.log("앙...악....");
// }, 1000)

document.querySelector('#stop').addEventListener('click', function (e) {
  // clearInterval(shout);
  location.reload();
})

console.log(
  // document.forms[0].email.focus()
);

document.getElementById('emaail').focus();

console.dir(window.location.hash = "apple");
console.dir(window.location);

// window.location.href = "http://www.gilbut.co.kr";
// location.assign("http://naver.com");
// location.replace("http://naver.com");

console.dir(window.history)




document.getElementById('forward').addEventListener('click', function (e) {
  window.history.forward()
})

document.getElementById('back').addEventListener('click', function (e) {
  window.history.back()
})

console.dir(window.navigator);


// var w = open("./test.html", "new page", "width = 400, height= 300" );
//팝업

console.dir(window.screen);
console.dir(Document);
console.dir(document);


function doClick(elm, f) {
  document.querySelector(`#${elm}`).addEventListener('click', f)
}

let w;
doClick("popup", function () {
  w = open('./test.html', 'new page', 'width=400, height=300');
})

doClick("popoff", function () {
  if (w) w.close();
})

var z;
doClick("open", function(){
  z = open("./popup.html", "new Popup", "width=300, height=200")
});
doClick("close", function(){
  z.close();
});

doClick("move", function(){
  z.moveBy(10, 20)
});

doClick("resize", function(){
  // z.resizeBy(10, 20)
  z.resizeTo(200, 150)
});

// window.onload = function(){
//   z = open("./popup.html", "new Popup", "width=300, height=200")
// }


doClick("colorChange", function(){
  z.document.body.style.backgroundColor = "green"
});

console.log(
  document.querySelector("button").nodeName
);
console.dir(
  document.childNodes[0]
);
console.log(
  document.body.firstElementChild
);



console.log(
  document.getElementsByName("email")
);
 
   
var divs = document.getElementsByTagName('div')
// var realBtnArr = Array.prototype.slice.call(divs,0);

function getRealElt (elmName){
  return Array.prototype.slice.call(elmName,0)
}
// var pTag = document.getElementsByTagName('input');
// console.log(getRealElt(divs));
// getRealElt(pTag).map(x=>{
//   console.log(x);
// });

var pWooow = document.getElementsByClassName('wooow');
var realPWooow = Array.prototype.slice.call(pWooow, 0);
console.log(
  realPWooow.find(elm => {
    return elm.dataset.name == 'target';
  })
);

console.clear();;
var [a,b] = [1,2];
console.log(a,b);

var {a,b,z:{h:g}} = {a:1,b:2,z:{h:5}};
console.log(a,b,g);

function test(t){
  // console.log(Array.prototype.slice.call(arguments,0));
  // console.log(arguments);
  console.log(t);
  console.log(Array.isArray(t));
}

// test("1","2","3");
test({a:1});

var numbers = [1,2,3];
console.log(...numbers);
// [1,2,3] = [1,2,3]
// 1,2,3

console.log(...[6,4,2]); 

var dogs = document.getElementsByName('dog');
dogs[1].value = 'corgi';
dogs[1].nextSibling.nodeValue = "웰시코기";
for(var i = 0 ; i < dogs.length ; i++){
  console.log(i+ " 번째의 값 : " +dogs[i].value);
};


var fakeList = document.querySelectorAll('input[type="button"]');
console.log(
  fakeList
);

var newList = [];
for(var i = 0; i < fakeList.length; i++){
  newList.push(fakeList[i])
}
console.log(
  newList.map(list => {
    list.id = "hello";
    return list
  })
);

console.log(document.forms);
console.log(document.anchors);
console.log(document.links);

console.log(
  document.querySelector('.불침번').className
);

console.log(
  document.getElementById('testLabel').htmlFor
);

document.getElementById('구글구글').href = "www.github.io";


console.log(
  document.getElementById('구글구글').getAttribute('href')
);

document.getElementById('구글구글').setAttribute('href', "ㅜㅜㅜㅜㅜㅜㅜㅜㅜ땡이라니")
console.log(
  document.getElementById('구글구글')
);//console이 비동기라서 class붙이면서 같이 출력

document.getElementById('구글구글').setAttribute("class", "히끅히끅 helloy")
console.log(
  document.getElementById('구글구글').hasAttribute('class')
);

console.log(
  document.getElementById('구글구글').attributes
);