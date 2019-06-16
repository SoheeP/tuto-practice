// alert('JS복습 2일차 시작')
console.log('오늘은 커피 주문하는 것까지 해보기 :)')

function lotto_rand(n){
  let lotto_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
  let i;
  
  for (i = 0; i <= n ; i++){
    r1 = Math.floor(Math.random() * 45);
    r2 = Math.floor(Math.random() * 45);
    r3 = Math.floor(Math.random() * 45);
    r4 = Math.floor(Math.random() * 45);
    r5 = Math.floor(Math.random() * 45);
    r6 = Math.floor(Math.random() * 45);
  }
}

console.log(lotto_rand(3))
