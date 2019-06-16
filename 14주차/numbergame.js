//숫자야구

function randomize (min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min
}


//숫자게임
/*function customRange (){
  let customMin = prompt('최소 범위를 입력해주세요.')
  if (isNaN(customMin)){
    customMin = prompt('숫자만 입력해주세요.')
  } else if( customMin == null || customMin > 99){
    customMin = prompt('0이상 99이하로 설정해주세요.')
  }

  let customMax = prompt('최대 범위를 입력해주세요.')
  if (isNaN(customMax)){
    customMax = prompt('숫자만 입력해주세요.')
  } else if( customMax == null || customMax > 99){
    customMax = prompt('0이상 99이하로 설정해주세요.')
  }
}*/
/*function numberGame (){
  let computer = randomize(+customMin, +customMax);
  let userAnswer = prompt(`${customMin}에서 ${customMax}사이의 숫자 하나를 골라주세요.`)
  if(isNaN(userAnswer)){
    alert('숫자만 입력해주세요');
    continue;
  } else if(userAnswer === computer){
    alert('정답입니다!')
    break;
  } else if( userAnswer > computer){
    alert(`${userAnswer}보다 작습니다.`)
    continue;
  } else {
    alert(`${userAnswer}보다 큽니다.`)
  }
}*/
let start = confirm('게임을 시작하시겠습니까?')
for( ; start ; ){
  // customRange();
  let customMin = prompt('최소 범위를 입력해주세요.')
  if (isNaN(customMin)){
    customMin = prompt('숫자만 입력해주세요.')
  } else if( customMin === null || customMin == 0){
    customMin = prompt('0이상으로 설정해주세요.')
  } else if(customMin > 99){
    customMin = prompt('99이하로 설정해주세요.')
  }

  let customMax = prompt('최대 범위를 입력해주세요.')
  if (isNaN(customMax)){
    customMax = prompt('숫자만 입력해주세요.')
  } else if( customMax === null || customMax == 0){
    customMax = prompt('0이상으로 설정해주세요.')
  } else if( customMax > 99){
    customMax = prompt('99이하로 설정해주세요')
  }
  // let rangeConfirm = confirm(`${customMin}에서 ${customMax}까지 정하신게 맞습니까? \n 취소를 누르면 다시 설정합니다.`)
  // rangeConfirm ? numberGame() : customRange();

  let computer = randomize(+customMin, +customMax);
  let userAnswer = prompt(`${customMin}에서 ${customMax}사이의 숫자 하나를 골라주세요.`)
  console.log(computer)
  if(isNaN(userAnswer)){
    alert('숫자만 입력해주세요');
    
  } else if(userAnswer == computer){
    alert('정답입니다!')
   
  } else if( userAnswer > computer){
    alert(`${userAnswer}보다 작습니다.`)
    
  } else {
    alert(`${userAnswer}보다 큽니다.`)
    
  }
  let again = confirm('다시 하시겠습니까?')
  if(!again){
    start = false;
  } 
}