let 그래쓸수elm = Module.elt("p", {class: "hello"}, "그래 쓸수있겠찌!");
document.body.append(그래쓸수elm);

var form = Module.elt("form", {id: "menu"});
var selectElm = Module.elt("select", {name: "bloodType", id:"bloodType"});
var bloodTypeList = ['A형', 'B형', 'O형', 'AB형', '싱하형', '이상형'];
bloodTypeList.map((list, idx) => {
  var optEl = Module.elt("option", {class: 'blood', value: idx }, list)
  selectElm.appendChild(optEl);
})

form.appendChild(selectElm);
document.body.appendChild(form);

var selectBl = Module.querySelector("#bloodType");
var list = Module.querySelectorAll('.blood');
selectBl.removeChild(list[list.length -2]);
selectBl.replaceChild(Module.elt("option", null, "hello"), list[list.length - 1])
var rect = Module.querySelector("#양꼬치").getBoundingClientRect();
console.log(rect);

Module.querySelector("#scroll").addEventListener("click", function(){
  Module.smoothScroll("target", 1000)
})

// Module.querySelector("#form1").submit()
// submit버튼이 없어도 바로 보내버린댜

console.log(
  document.forms[0].name
);
console.log(
  Module.querySelector('#form1').elements
);

console.log(
  Array.from(Module.querySelector('#form1').elements).filter(elm => {
    return elm.name == 'name'
  })
);
Module.querySelector("#title").addEventListener("click", function(){
  this.style.backgroundColor = "pink"
})

var element = Module.querySelector("#양꼬치");
console.log(
  element.style.height
);

var computeStyle = getComputedStyle(element);
console.log(
  computeStyle.height
);

element.addEventListener("mouseover", function(){
  this.classList.add('toggle')
})
element.addEventListener("mouseout", function(){
  this.classList.remove('toggle')
})

element.addEventListener("click", function(){
  this.classList.toggle('on')
})

