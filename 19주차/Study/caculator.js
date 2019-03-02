// function calc(cal){
//   let calArr = cal.split('');
//   let res = null;
//   let newCalArr = calArr.filter(x =>{
//     if(x.trim().length >= 1){ return x; }
//   })
//   switch (newCalArr[1]){
//     case '+':{
//       res = parseInt(newCalArr[0]) + parseInt(newCalArr[2]);
//       break;
//     }
//     case '-':{
//       res = parseInt(newCalArr[0]) - parseInt(newCalArr[2])
//       break;
//     }
//     case '*':{
//       res = parseInt(newCalArr[0]) * parseInt(newCalArr[2])
//       break;
//     }
//     case '/':{
//       res = parseInt(newCalArr[0]) / parseInt(newCalArr[2])
//       break;
//     }
//   }
//   return res;
// }
// console.log(
//   calc('1 * 1 5')
// )
// console.log(calc.calTest)




document.getElementById('calForm').addEventListener("submit", function (e) {
  e.preventDefault();
  let calValue = +this.calValue.value;
  console.log(calValue)
  if (isNaN(calValue)) {
    alert('숫자만 넣어주세염')
  } else {
{   // this.man.value = Math.floor(calValue / 10000)
  // calValue = calValue % 10000;
  // this.ohthou.value = Math.floor(calValue / 5000);
  // calValue = calValue % 5000;
  // this.thousand.value = Math.floor(calValue / 1000);
  // calValue = calValue % 1000;
  // this.hundred.value = Math.floor(calValue / 100);
  // this.elseElse.value = calValue % 100;
}
    // console.log(Array.from(document.getElementById('calForm').children))
    //children은 자손까지만, 손자요소를 바로 가져오지 못함
    Array.from(document.getElementById('calForm').children).forEach(x => {
      if (x.classList.contains('calDiv')) {
        Array.from(x.children).forEach(y => {
          if (y.getAttribute('data-name') == 'calInput') {
            y.value = Math.floor(calValue / +y.getAttribute('data-value'));
            calValue = Math.floor(calValue % +y.getAttribute('data-value'));
          }else if(y.getAttribute('data-name')=='calInputElse'){ 
            //else 값
            y.value = calValue;
          }
        })
      }
    });
  }

})

// console.log(dataValueArr.sort((x, y) => y - x));
