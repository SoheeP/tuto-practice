let arr = [1, 2, 3, 4, 5, 6, 7];
function sumArr(arr){
  return arr.reduce((x, y)=> x + y)
}

console.log(sumArr(arr))

function sumArrFor(arr){
  let sum = 0;
  for(let i = 0 ; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrFor(arr))

function multiple(){
  for(let i = 2; i < 10 ; i++){
    innerMulti(i)
  }
}

function innerMulti(n){
  for(let j = 1; j < 10; j++){
    console.log(`${n} x ${j} = ${n*j}`)
  }
}
multiple()

function diamond(c, n, x, y, r, color){
  c.strokeStyle = color;
  c.beginPath();
  for(let i = 0; i < n; i++){
    let t = i * 2 * Math.PI / n;
    for(let j = i + 1; j < n ; j++){
      let s = j * 2 * Math.PI / n;
      c.moveTo(x + r * Math.cos(t), y + r * Math.sin(t));
      c.lineTo(x + r * Math.cos(s), y + r * Math.sin(s))
    }
  }
  c.stroke();
}

window.onload = function(){
  let canvas = document.getElementById('mycanvas');
  let ctx = canvas.getContext('2d');
  diamond(ctx, 6, 170, 170, 150, 'darkblue');
  diamond(ctx, 12, 490, 170, 150, 'darkblue');
  diamond(ctx, 18, 810, 170, 150, 'darkblue');
}

let obj = {
  a:1,
  b:2,
  c:3
}
for( p in obj){
  console.log('p = ' + p);
  console.log(obj[p])
  //for/in 반복문 내에서 순회한 키값(지금 여기서 p)을 호출해서 보려면 배열방식으로 호출해야만 p를 볼 수 있다.
  //만약 닷노테이션을 사용할경우 원래 opj에서 키값(p)를 바로 찾기때문에 undefined.
  //결국 p는 순회용 키값
}

// loop: while(true){
//   if(confirm('is종료?')) break loop;
// }

console.clear();
let a = [2, 4, 6, 8, 10], b = [1, 3, 5, 6, 9, 11];

loop: for(var i = 0; i < a.length ; i ++){
  console.log(a[i])
  for(var j = 0; j < b.length ; j++){
    console.log(b[j], `inner`)
    if(a[i] == b[j]) break loop;
    
  }
}

let aa = [2, 5, -1, 7, -3, 6, 9];

for(var i = 0, sum = 0; i < a.length ; i++){
  if(a[i] < 0) continue;
  sum += a[i];
} 

console.log(sum);
