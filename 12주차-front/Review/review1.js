// alert('JS복습 1일차 시작')
console.log('복습을 시작합니다.')

document.getElementById('demo').innerHTML="demo 안에 삽입 :)"
console.log(document.getElementById('demo'))
document.getElementById('demo').style.color="#ff0000"

var x, y, z
x = 3.5;
y = 4;
z = 10;

function calc1 (x, y, z){
  return x * y % z;
}
document.getElementById('calc').innerHTML= `calc1함수 실행의 결과는 ${calc1(x, y, z)}입니다.`

function calc2(x, y, z){
  return x += y * z;
}
console.log(calc2(x, y, z));
console.log(calc2(5, 2, 1));

var job = "Front-end Developer";
var age = 29;
var sh = {
  gender: 'female',
  disease: ['비염', '기관지염', '후두염', '인후염', '위염', '과민성대장증후군'],
  height: 167,
  says: function(txt){
    var txt = prompt('나한테 하고 싶은말 적어주긔 ^_^')
    if (txt === null || txt === ""){
      alert('말하기..싫구나..알겠어여..')
    } else if (!isNaN(+txt)) {
      alert('숫자만 쓰셨는걸!!')
    } else {
      alert(`${txt} 라고 하셨네여!`)
    }
  }
}
console.log(typeof job);
console.log(typeof age);
console.log(typeof sh);
console.log(sh.disease[2])

function insertVal (){
  
}