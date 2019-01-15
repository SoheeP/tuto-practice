// alert('JS복습 2일차 시작')
console.log('오늘은 커피 주문하는 것까지 해보기 :)')

function lotto_rand(n){
  let i;
  for (i = 0; i <= n ; i++){
    Math.floor(Math.random() * 45)
  }
  
}

console.log(lotto_rand(3))
