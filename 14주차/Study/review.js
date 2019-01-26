console.group('히히힣ㅎㅎㅎㅎㅎㅎㅎ')
document.getElementById('list').style.backgroundColor = '#34e57f';
document.getElementById('list').innerHTML = "뿌애애애앵"
var x = 20;
var y = 2;
var z = 7;
var str  = "호로로로로로"
var haengnam = {
  dishes: ['펄체리 뷔페접시', '러브러브 브런치 다과세트', '버블팝 올인원 식기 5p'],
  mug: '파슬리 머그 3pcs',
  kitchen: '프랜들리 어린이수저 2pcs',
  explain: function(){
    return this.dishes
  }
}
console.log(x*y+z/y)
console.log(haengnam.explain())
console.log(`x - ${typeof x}, str - ${typeof str}, haengnam - ${typeof haengnam}`)

var w = 0;
while(w < 10){
  console.log(w);
  w++;
}
// console.log(w);
console.groupEnd()

console.clear();

var rect = document.getElementById('rect')
var circle = document.getElementById('circle')
var moseEvent = document.getElementById('mouse')
rect.addEventListener('click', function(){
  moseEvent.setAttribute('class', 'rect')
})
circle.addEventListener('click', function (){
  // document.getElementById('mouse').setAttribute('class', '')
  moseEvent.removeAttribute('class')
})

moseEvent.addEventListener('mouseover', function () {
  moseEvent.style.backgroundColor = 'red';
})

moseEvent.addEventListener('mouseout', function () {
  moseEvent.style.backgroundColor = 'aqua';
})

var inputText = document.getElementById('textInput');
inputText.addEventListener('keyup', function(e){
  e.preventDefault();
  this.style.borderColor = 'purple'
})

document.getElementById('select').addEventListener('change', function(e){
  e.preventDefault();
  console.log(this.value)
})


var ask = confirm('게임 시작?')
if (ask){
  var select = ['가위', '바위', '보']
  // var userAnswer = prompt(`${select} 중에 선택해주세요.`)
  var computer = select[Math.floor(Math.random() * select.length)]
  console.log(computer)
} else {
  alert('다음에^^!')
}