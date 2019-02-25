// document.write('documnet.wirhte(Hi) : 태그없이 그냥 바로 입력')
var createP = document.createElement("p")
var insertP = document.getElementById("selector")
insertP.append(createP);

var textC = document.getElementsByClassName("className")[0].textContent;
console.log(textC)

var selectP = document.getElementsByTagName("p")
console.log(selectP)

document.querySelector("p").innerText = 'p추가!'
//getElementByClassName은 배열을 가져오므로, index번호를 넣어야 한다. 하지만querySelector는 객체 그 하나만을 가져옴.
document.getElementById("selector").style.color = "blue"
function trueOrFalse(x){
  return console.log(`true or false ?! '${Boolean(x)}'`);
}

function howManyDays (month){
  var days;
  switch (month) {
    case 2:
      {
        days = 28;
        break;
      }
    case 4: 
    case 6: 
    case 8: 
    case 10:
      {
        days = 30;
        break;
      }
    default:
      {
        days = 31;
        break;
      }
  }
  return days;
}
trueOrFalse(22);
console.log(howManyDays(2));

let coffee = {
  list: [],
  menu: {
    아메리카노: 4500,
    카페라떼: 4800,
    자바칩프라푸치노: 6000,
    모카프라푸치노: 5800,
    핫초코: 5500,
    루이보스티: 5300,
    히비스커스: 5200
  },
  openHour: "10:00",
  colsingHour: "21:00"
}

for(x in coffee.menu){
  coffee.list.push(x)
};
var putMenu = document.getElementById("coffeeMenu")

coffee.list.forEach((x, y) => {
  putMenu.innerHTML += `${y+1}. ${x} <br>`
})

coffee.list.push('')

/*
let todayLunch = {
  한솥: ['새치고기고기', 4500],
  편의점: ['라면, 간식 etc', 4000],
  파파이스: ['치킨휠레버거', 5900],
  분식집: ['라면+김밥..?', 5000],
  따라가서먹는다: ['한신가겠지', 6000]
}
function lunchRandom(){
  var decideR = Math.floor(Math.random() * todayLunch.length)
}
//랜덤으로 한솥, 편의점, 파파이스를 선택하고 그 안의 배열을 보여준다.
// 현재 법카 잔액에서 나머지 금액을 뺀 나머지도 보여준다.

*/


function disemvowel(str) {
  let vowles2 = /[aeiou]/ig;
  return str.replace(vowles2, "");
}

  console.log(disemvowel("This website ddd"))