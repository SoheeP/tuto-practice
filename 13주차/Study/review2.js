for (var i = 1; i <= 10; i++) {
  console.log(i);
}

for (var i = 0; i < 30; i++) {
  if (i % 2 == 0 && i != 0) {
    i += 1;
    console.log(i);
  }
}

console.group('구구단');
for (var i = 0; i < 10; i++) {
  if (i >= 2) {
    console.group(`${i}단`)
    for (var j = 0; j < 10; j++) {
      if (j >= 1) {
        console.log(`${i} x ${j} = ${i*j}`);
      }
    }
    console.groupEnd();
  }
}
console.groupEnd();

console.clear();

for(var i = 0; i <= 10; i++){
  if(i != 0){
    console.group(`i열, ${i}`);
    for(var j = 0; j < 1; j++){
      console.group(`j열, ${j}`)
      for(var p = 0; p < 1; p++){
        console.log(`p열 ${p}`)
      }
      console.groupEnd();
    }
    console.groupEnd();
  }
}

console.clear();
console.log(Math.PI)//원주율
console.log(Math.round(167.6));//반올림
console.log(Math.ceil(2.1));//올림
console.log(Math.floor(3.7));//내림
console.log(Math.pow(3,3));//제곱
console.log(Math.sqrt(81));//루트
console.log(Math.abs(-1231));//절대값
console.log(Math.ceil(Math.random() + 1));
console.log(+Math.random().toFixed(3));
//toFixed하면 String이 됌, 단 +로 number가 되버려서 세번째자리에 0이 나오면 표시가 안됌
console.log(Math.max(10, 30, 100, -20));
console.log(Math.min(10, 30, 100, -20));

console.clear();

console.log(Math.ceil(Math.random() * 10));

/*
var fruit = ['사과', '체리', '오렌지', '키위', '바나나']
setInterval(function(){
  var date = new Date();
  console.log(
    `${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`
  )
  console.log(
    fruit[Math.ceil(Math.random() * fruit.length-1)]//index가 0번부터 시작되는데 ceil은 올림이여서 인덱스 1번부터 가져오니까 마지막에 length -1해줌
  )  
}, 1000)
//원하는 시간마다 실행
*/
var opinion = false; // 실행하려면 true
var rpsArr = ['가위', '바위', '보']
for( ; opinion ; ){
  opinion = confirm('넌 날 소중히 여기지 않았지. 자, 이제 게임을 시작하지.')
  if(opinion){
    var userAnswer = prompt(`${rpsArr}중에 하나만 선택`)
    var computer = rpsArr[Math.ceil(Math.random() * rpsArr.length-1)];
    var result = null;
    switch(userAnswer.trim()){ // trim은 앞뒤 공백문자 없애줌
      //유저값가져와서 진행
      case rpsArr[0] :{//유저 대답이 가위
        if(computer == '가위'){
          result = '비겼군.'
        } else if (computer == '보'){
          result = '자네가 이겼다.'
        } else if (computer == '바위'){
          result = '자네가 졌다.'
        }
      }
      break;
      
      case rpsArr[1] :{//유저 대답이 바위
        if(computer == '가위'){
          result = '자네가 이겼다.'
        } else if (computer == '보'){
          result = '자네가 졌다.'
        } else if (computer == '바위'){
          result = '비겼군.'
        }
      }
      break;
      
      case rpsArr[2] :{//유저 대답이 보
        if(computer == '가위'){
          result = '자네가 졌다.'
        } else if (computer == '보'){
          result = '비겼군'
        } else if (computer == '바위'){
          result = '자네가 이겼다.'
        }
      }
      break;
      
      default : 
    }
    var cAnswer = alert(`내 선택은 ${computer}라네. 자네의 선택은 ${userAnswer}로군. ${result}`);
    var again = confirm('재도전 하겠는가?')
    if(again) {
      opinion = true
    } else {
      opinion = false;
    }
  }
}

//리터럴(부르는 단어)
//parseInt(숫자로 변환할것)숫자가 먼저 있으면 숫자로 가져오는데 string이 먼저면 못가져옴^^NaNㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

//sort는 크기별로 정렬되는게 아님
//크기별로 하려면 numArr.sort(((a,x)=>a-x))
var numArr = [1, 3, 5, 6, 0, 11, 111]
console.log(numArr.sort());

//join() : array 콤마로 구분하는 기점을 중심으로 문자열을 넣어주고 String으로 변환
//split(): 문자를 기준으로 array로 변환

var fruit = ['사과', '체리', '오렌지', '키위', '바나나']

fruit.push('딸기');
console.log(fruit);
fruit.pop();
console.log(fruit);

fruit.shift();//맨처음꺼 없애기
console.log(fruit);
fruit.unshift('블루베리');
console.log(fruit);

//slice는 원본을 유지하고 자르고, splice는 원본도 건드리면서 자르고
//splice(2, 2, '얍','얍') index 2 번째에서 2개를 선택해서 없애고, '얍' '얍'을 집어넣음

var hing9 = ['호롤로', '호에엥']
var ha = ['허허허']
var hing99 = hing9.concat(ha)
console.log(hing9.concat(ha))
console.log(hing9);
console.log(hing99)
//원본배열이 바뀌기보단 return값이 배열을 합쳐서 보여주는 것, 합칠 배열이 많으면 concat(배열1, 배열2)

alert('배고파!!!!!!!!!!!!!!')
console.group('지금하고 싶은것')
console.log('포도 엉덩이 만지고 싶다')
console.log('포도 털 쓰다듬고 싶다.')
console.log('포도 껴안고 자고 싶다.')
console.log('포도한테 얼굴대고 부비적대고 싶다')
console.groupEnd();

document.getElementById('answer').innerHTML = "엄마!!!!!!"
document.getElementById('answer').style.fontSize = '1.5em';

var x, y, z;
x = 10;
y = 3;
z = 52;
console.log(x+y+z);
console.log( x * z + y)
console.log(x+=2);
console.log('sam'+2)
console.log(3+3+'e')
console.log(x++)
console.log(x);
console.log(++x);
var str = "호에에엥 홓에에에에엥"
var cellPhone = {
  name: 'Galaxy Note 9',
  ram: '512G',
  price: 1300000
}
console.log(typeof x, typeof str, typeof cellPhone)

var cafe = {
  menu: ['아메리카노', '카페라떼', '핫초코', '차', '스무디'],
  아메리카노: 5000,
  카페라떼: 4500,
  핫초코: 5500,
  차: 5300,
  스무디: 6200
}

document.getElementById('cafeOrder').addEventListener('click', function () {
  var question = confirm('주문하시겠습니까?')
  if(question){ 
    var order = prompt(`${cafe.menu}중에 골라주세요.`)
    alert(`고른 음료는 ${order}이며, 가격은 ${cafe[order]}원입니다.`)
  } else {
    alert('다음에 또 이용해주세요.')
  }
})