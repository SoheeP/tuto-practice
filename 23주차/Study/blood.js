let bloodForm = document.getElementById('blood')

// bloodForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   let hp = this.highPressure.value.trim();
//   let lp = this.lowPressure.value.trim();
//   let result = document.querySelector('.result')
//   if(isNaN(hp) || isNaN(lp)){
//     alert('숫자만!!!!!!!!!!!')
//   } else if(hp > 70 && lp > 30 && hp < 200 && lp < 150){
//     result.classList.remove('red', 'blue', 'green')
//     if(hp < 90 && lp < 60){
//       result.innerHTML = '당신은 저혈압입니다.';
//       result.classList.add('blue');
//     } else if(hp > 140 && lp > 90 ){
//       result.innerHTML = '당신은 고혈압입니다';
//       result.classList.add('red');
//     } else {
//       result.innerHTML = '당신은 정상입니다.';
//       result.classList.add('green')
//     }
//   } else {
//     result.innerHTML = '';
//     result.classList.remove('red', 'blue', 'green')
//     alert('범위가 이상합니다')
//   }
// })

// hp , lp
// 고혈압이 120 , 90 둘다 이상
// 저혈압이  90, 60 미만
// 정상 hp 120까지  lp 80 까지
bloodForm.addEventListener('submit', function(e){
  e.preventDefault();
  let hp = this.highPressure.value.trim();
  let lp = this.lowPressure.value.trim();
  let result = document.querySelector('.result');
  result.classList.remove('red', 'blue', 'green');
  result.innerHTML = '';
  if(isNaN(hp) || isNaN(lp)){
    alert('숫자만!!!!!!!!!!!')
  }else if (hp > 200 && hp < 20 && lp <20 && lp >200){
    let rere = null;
    if(hp < 120 && lp > 80){ rere = 2; }
    if(hp < 90 && lp > 60){ rere = 1; }
    if(hp > 120 && lp > 90){ rere = 0; }
    result.innerHTML = resultObj.result(rere);
  } else{
    alert(resultObj.result(3))
  }
});

let resultObj = {
  type:['고혈압','저혈압','정상','비정상'],
  result(res){
    return `당신은 ${this.type[res]}입니다.`
  }
}