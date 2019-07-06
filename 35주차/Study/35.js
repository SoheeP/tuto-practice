console.log(`hello world!`);



var para = document.getElementById('card');
console.log(
  para.textContent
);

var card2 = document.getElementById('card2');
console.log(
  card2.innerHTML
);

console.log(
  Module.querySelector('h1')
);
console.log(
  Module.querySelectorAll('li').map((li, idx) => {
    li.className = 'active';
    //이건 모든 클래스 네임을 다 초기화하고 요기에 하나 붙임.
    li.classList.add('on');
    li.setAttribute('id', idx)
    return li;
  })
);

para.textContent = "&diams;다이아는 <strong>상인</strong>이라는 뜻입니다."
console.log(
  para.innerText
);

console.log(
  para.innerHTML
);

var element = document.createElement('h1');
console.log(
  element.nodeName
);
var newtext = document.createTextNode("We only see what we know");

console.log(
  newtext
);

var doglist = Module.querySelector('#doglist');
var element = document.createElement('li');
var text = document.createTextNode('양꿔치');
doglist.appendChild(element);
element.appendChild(text);

var liEl = document.createElement('li');
liEl.textContent = "불독";
doglist.insertBefore(liEl, doglist.children[1]);

doglist.appendChild(doglist.children[0]);
//슬라이드 할때 많이 씀



// function elt (name, attributes){
//   var node = document.createElement(name);
//   if( attributes ){
//     for(var attr in attributes){
//       if(attributes.hasOwnProperty(attr)){
//         node.setAttribute(attr, attributes[attr])
//       }
//     }
//   }
//   for(var i = 2; i <arguments.length ; i++){
//     var child = arguments[i];
//     if( typeof child == "string"){
//       child = document.createTextNode(child);
//     }
//     node.appendChild(child)
//   }
//   return node;
// }

console.log(
  Module.elt('input', 'ggg')
);

console.log(
  // elt('div', null, [])
);

var headLine = Module.elt('h1', null, "푸들푸들");
document.body.appendChild(headLine);