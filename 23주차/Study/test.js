// alert('안녕하세요!')
// let inganmi = prompt('이름을 입력하시오');
// console.log(inganmi)
// confirm(`${inganmi}가(이) 맞습니까?`)

function consoleFunc(a, b){
  return a * b;
}
console.dir(consoleFunc);
console.error('음료수를 흘렸습니다!!');
console.warn('뚜껑을 안닫았습니다!');
console.info(consoleFunc);
console.trace(consoleFunc) //참조위치, 함수위치를 찾아서 함수의 원형이 어디있는지를 알려줌
// console.time()
// for(let i = 0; i<5000 ; i++){
//   console.log(i)
// }
// console.timeEnd();
let name = "Tom";
let height = 173.7;
console.log("%s의 \n키는 %f cm입니다.", name, height)
let p = {
  x: 1,
  y: 2
}

console.dir(p)

// function timeNow(){
//   let time = new Date();
//   console.log(time)
// }
// window.onload = function(){
//   document.getElementById('timeNowBtn').onclick = timeNow
// }
//여기서 onclick은 이미 실행해주기떄문에 함수(); 이렇게 쓰지 않아도 된다!

//이 아래는 HTML 요소 속성에 처리
// window.onload = function(){
//   function timeNow(){
//     let time = new Date();
//     console.log(time)
//   }
// }

let idx = 0;
document.getElementById('keyDown').addEventListener('keydown', (event) =>{
  if(idx == 0){
    idx=1;
    console.log(event.keyCode,'keyDown');
   
  }else{
    console.log('실해 안댐 ㅜㅜ')
  }
  
});

document.getElementById('keyUp').addEventListener('keyup', (event) =>{
  console.log(event.keyCode,'keyUp')
});

document.getElementById('keyPress').addEventListener('keypress', (event) =>{
  console.log(event.keyCode,'keyPress')
});
let form ={
  input:'hello'
}

document.getElementById('changeForm').addEventListener('change',()=>{
  console.log('helloworld')
})


document.getElementById('changeForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  // console.log('helloworld')
})


// console.dir(DOM)

/*setTimeout(()=>{
  console.log('hello World')
}, 5000)

let nowSeconds = setInterval(()=>{
  let curDate = new Date();
  console.log(curDate.getSeconds())
  if(curDate.getSeconds() === 30){
    clearInterval(nowSeconds);
  }
}, 1000)
*/
let date = document.querySelector('.date');

let week = new Date();

//월~목: Hell 금요일: 파뤼투놔잇 토요일: 방탕잼 일요일:롬곡웊눞
let weekArr = ['일', '월', '화', '수', '목', '금', '토']
switch(2){
  case 0:
    document.write(`${weekArr[week.getDay()]}요일이다! 롬곡웊눞`)
    break;
  case 5:
    document.write(`${weekArr[week.getDay()]}요일이다! 파뤼투놔잇!!!!!!!!!`)
    break;
  case 6:
    document.write(`${weekArr[week.getDay()]}요일이다! 방탕JAM`)
    break;
  default:
    document.write(`${weekArr[week.getDay()]}요일이다! HELL!!!!!!!!!`)
    break;
}

function isLeapYear(year){
  if((year % 400 === 0) || (year%100 !== 0) && (year%4 === 0)){
    return true;
  }
  return false;
}

console.log(isLeapYear(2019))