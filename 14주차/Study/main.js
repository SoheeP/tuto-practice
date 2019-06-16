var tea = ["캐모마일", "얼그레이", "히비스커스", "페퍼민트"];

console.log(tea.join(' + '))
//join은 문자열을 포함시켜주면서 배열을 string으로 바꾼다

//pop은 배열 마지막 요소를 제거하고, 그 값을 반환한다
//shift로 뺄때도 제거한 값을 반환함
var x = tea.pop();
// x는 "페퍼민트" 값이 반환.
var y = tea.push('녹차');
//y에는 length값이 들어감. 숫자값으로 들어감 이경우에는 4
//unshift도 숫자값으로 반환

//splice는 배열의 원형을 바꿔버린다.
//배열에 값을 넣고 빼고 삭제하고 사이에 삽입하는 것들은 원형을 바꿔버린다.
//splice(2, 1, 'lemon', 'kiwi') ->lengh가 2인 자리에, lemon과 kiwi를 넣는데, 2인자리에서부터 1번째요소는 잘라냄 , 0은 사이에 쏙
console.log(tea.splice(2, 0, "말차", "블랙티"))
console.log(tea)

//concat은 배열의 원형을 바꾸지 않고 붙은 새 배열을 만듦.

//slice된 배열값을 반환한것
var teaC = tea.slice(2)
//index2번을 포함한 배열 반환값을 teaC가 가지고 있는 것, typeof teaC는 object지만 새 배열을 생성한 것은 아님. - 새배열 만드는건 함수가 따로 있음
console.log(tea, teaC)
console.log(typeof teaC)
var teaD = tea.slice(1, 4)
console.log(teaD)

console.clear();

var num1 = [1, 3, 5, 11, 67, 44, 32]

// num1.forEach(function(x){
//   console.log(x)
// })
//화살표 함수로 하면 아래처럼됌 ^^

num1.forEach((x)=>console.log(x))

// function sum (x, y){
//   return x + y
// }
var sum = (x, y)=>x + y
//fucntion abc하고 선언한거랑 똑같ㅇ..??????????
//한줄일때는 {}없어도 return을 쓴것과 같...?헐..

console.log(sum(192, 432))

var list = document.getElementById('list');
var customer = ["서은광", "이민혁", "이창섭", "임현식", "신동근", "정일훈", "육성재", "강다니엘"]
customer.forEach((x)=>{
  let div = document.createElement('div')
  div.textContent = x;
  list.appendChild(div)
})

customer.forEach((x, y, z)=>{
  console.log(x)//x는 배열자체를 순회
  console.log(y)//y가 인덱스번호로 나온다
  console.log(z)//배열자체를 호출
})

console.clear();

var num2 = [2, 5, 62, 32, 78, 1]
console.log(
  num2.map((x)=>{
  return x * 5
})
)
console.log(
  num2.filter((x)=>{
    return x > 30;
  })
)

var everyArr = [1, 2, 3, 4, 5]
console.log(
  everyArr.every((x)=>{
    return x > 0
  })
)// true, false 반환


var someArr = [1, 2, 3, 4, 5]
console.log(
  someArr.some((x)=>{
    return x > 10
  })
)// true, false 반환

var indexOfArr = ['Apple', 'Samsung', 'Nokia', 'Motorora']

console.log(indexOfArr.indexOf('samsung'));//찾을수 없을땐 -1 반환
//인자값을 Samsung, 2 식으로 쓰면 index2번 이후에 있는 Samsung을 찾는다.

//date의 월(month), 요일(day)는 인덱스번호로 가져온다. 그래서 원하는 결과값을 말하려면 +1

// setInterval(() => {
//   let date = new Date;
//   let years = date.getFullYear()
//   let month = date.getMonth()
//   let dat = date.getDate()
//   let days = date.getDay()
//   let hours = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();

//   let monthArr =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   let daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

//   console.log(
//     `${years}-${monthArr[month]}-${dat} ${hours}:${min}:${sec} ${daysArr[days]}`
//     )
// }, 1000);

document.getElementById('tForm').addEventListener('submit', function (e) {
  e.preventDefault(); //submit의 함수 실행막음
  console.log(this.tTextInput.value)
  //this이벤트가 발생한 그자신 'tForm'이 택해짐
  console.log(e.target.tTextInput.value)
  console.log(document.getElementById('textInput').value)
})
