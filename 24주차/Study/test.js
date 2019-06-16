function binaryOperation(a, b, operation){
  switch(operation){
    case '+':{return a + b;}
    case '-':{return a - b;}
    case '*':{return a * b;}
    case '/':{return a / b;}
    case '%':{return a % b}
    case '^':{return Math.pow(a, b);}
    default: return NaN;
  }
}

console.log(
  binaryOperation(1, 3, "+")
)
console.log(
  binaryOperation(3, 3 ,"^")
)
//binaryOperation('1+3')

function operation(val){
  let newVal = val.split('').filter((x)=> x !== ' ');
  let firstNum = +newVal[0];
  let lastNum = +newVal[2];
  switch(newVal[1]){
    case '+':{return firstNum + lastNum;}
    case '-':{return firstNum - lastNum;}
    case '*':{return firstNum * lastNum;}
    case '/':{return firstNum / lastNum;}
    case '%':{return firstNum % lastNum;}
    case '^':{return Math.pow(firstNum, lastNum)}
    default: return NaN;
  }
}
console.log(
  operation('2^    3')
)

let i = 0;
while(i < 5){
  console.log(i);
  break;
  i++;
}

console.clear();
function fact(n){
  let k = 1, i = 1;
  while(i < n){
    k *= (++i);
  }
  return k;
}

console.log(fact(3), 'done');

let vipsArr = [1, 3, 4, 5, 6, 23, 33, 22, 1, 5, 6, 7, 11];

// function linearSearch(x, a){
//   let i = 0;
//   let n = a.length;
//   while(i < n && x > a.sort((x, y)=> x - y)[i]){ i++ }//x > a[i] :: 내가 쓴 숫자가 배열의 범위 내에 있는지 확인
//   if( x == a[i]){ return i}//x > a[i]는 같은걸 잡지 못함. 같으면 종료하니까 return을 한번더 해줌
//   return null;
// }

// console.log(linearSearch(11, vipsArr))


function getSearchIndexOf(x, a){
  for(let i = 0; i < a.length; i++){
    if(x == a[i]){
      return i ;
    }
  }
  return null;
}

console.log(getSearchIndexOf(1, vipsArr))

function binarySearch(x, arr){
  let len = arr.length;
  let left = 0 , right = len -1;
  while(left < right){
    let middle = Math.floor((left+right)/2);
    if(x <= arr[middle]){
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  if(x == arr[right]){return right};
  return null;
}

let arr = [2, 3, 4, 5, 11, 22, 33, 44, 73, 91];
console.log(binarySearch(3, arr))
console.clear()
let bg = 0;
do{
  console.log('느아는 무조그언 실행된드아')
  bg ++;
  console.log(bg)
} while(bg < 5)

function doWhileFact(n){
  let k =1, i = n;
  do{
    k *= i--;
  } while( i > 0);
  return k ;
}

console.log(doWhileFact(3))
for(let i = 0, g = 5; g-- ; ){
  console.log(g)
}
//오름차순처럼은 못함

let newWhile = 5;
while(newWhile){
  console.log(newWhile);
  newWhile --;
}

for(let i = 0; i <10; i++){
  console.log(i)
}

console.clear();

for(let i = 0, j = 10; i< 10; i++, j-= 2){
  console.log(`i ${i} , j ${j}`)
}
for(;;){
  if(confirm('종료하시게')) break;
}
