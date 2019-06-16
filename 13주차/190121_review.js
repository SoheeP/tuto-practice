var rps = ['가위', '바위', '보'];
/**
 * 보지않고 가위바위보 짜보기!
 
var opinion = confirm('게임을 시작하시겠습니까?')
for (; opinion;) {
  if (opinion) {
    var userAnswer = prompt(`${rps} 중 하나를 골라 입력해주세요.`);
    var computer = rps[Math.floor(Math.random() * rps.length)];
    var result = '';
    switch (userAnswer.trim()) {
      case '가위':
        {
          if (computer == rps[0]) {
            result = '비겼습니다.'
          } else if (computer == rps[1]) {
            result = '아쉽군요, 졌습니다.'
          } else {
            result = '축하합니다, 이겼습니다!'
          }
        }
        break;
      case '바위':
        {
          if (computer == rps[0]) {
            result = '축하합니다, 이겼습니다!'
          } else if (computer == rps[1]) {
            result = '비겼습니다.'
          } else {
            result = '아쉽군요, 졌습니다.'
          }
        }
        break;
      case '보':
        {
          if (computer == rps[0]) {
            result = '아쉽군요, 졌습니다.'
          } else if (computer == rps[1]) {
            result = '축하합니다, 이겼습니다!'
          } else {
            result = '비겼습니다.'
          }
        }
        break;
    }
    var answer = alert(`당신의 선택은 ${userAnswer}이고, 컴퓨터의 선택은 ${computer}입니다. `+ result)
    var again = confirm('다시 시도하시겠습니까?')
    if(again){
      continue;
    } else {
      opinion = false;
    }
  }
}

*/

document.getElementById('gameStart').addEventListener('click', function () {
  var opinion = confirm('게임을 시작하시겠습니까?')
  for (; opinion;) {
    if (opinion) {
      var userAnswer = prompt(`${rps} 중 하나를 골라 입력해주세요.`);
      var computer = rps[Math.floor(Math.random() * rps.length)];
      var result = '';
      switch (userAnswer.trim()) {
        case '가위':
          {
            if (computer == rps[0]) {
              result = '비겼습니다.'
            } else if (computer == rps[1]) {
              result = '아쉽군요, 졌습니다.'
            } else {
              result = '축하합니다, 이겼습니다!'
            }
          }
          break;
        case '바위':
          {
            if (computer == rps[0]) {
              result = '축하합니다, 이겼습니다!'
            } else if (computer == rps[1]) {
              result = '비겼습니다.'
            } else {
              result = '아쉽군요, 졌습니다.'
            }
          }
          break;
        case '보':
          {
            if (computer == rps[0]) {
              result = '아쉽군요, 졌습니다.'
            } else if (computer == rps[1]) {
              result = '축하합니다, 이겼습니다!'
            } else {
              result = '비겼습니다.'
            }
          }
          break;
      }
      var answer = alert(`당신의 선택은 ${userAnswer}이고, 컴퓨터의 선택은 ${computer}입니다. ` + result)
      var again = confirm('다시 시도하시겠습니까?')
      if (again) {
        continue;
      } else {
        opinion = false;
      }
    }
  }
});

var insNum = document.getElementById('numb').getValue();
console.log(insNum)
