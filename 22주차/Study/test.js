let pageData = {}
pageData.list=[];

for(let i = 0 ; i < 50 ; i++){
 pageData.list.push(
   {
     title:`오늘의 날짜는 ${i}입니다.`,
     id:i,
     writer:'Phantom0'+i,
     date:`2019-03-2${i}`
   }
 )
}
console.log(pageData)

let selectBox = document.getElementById('selectList');
let dataListCount = selectBox.value;
let container = document.querySelector('.container')

selectBox.addEventListener('change',function(e){
  dataListCount = this.value;
})

pagenation(0, dataListCount);

function pagenation(pageVal, pageCount) {
  container.innerHTML = '';
  for (let i = pageVal * pageCount; i < (pageVal * pageCount) + parseInt(pageCount); i++) {
    if(i >= pageData.list.length) break;
    // console.log(pageVal,'pageVal')
    // console.log(pageCount,'pageCount');
    // console.log((pageVal*pageCount)+parseInt(pageCount),'곱')
    /** 
     * 데이터리스트 초기값(i)을 버튼값 * 불러올 갯수 => 0~9번 데이터리스트 / 10 ~ 19번 데이터리스트 처럼 데이터리스트 넘버링이 결정됌
     * i < (pageVal * pageCount) + pageCount;
       i로 설정하면 이후 i++때문에 계속 무한루프를 돌게 된다. 그래서 초기값을 풀어서 설정해주고, pageCount 갯수만큼 length를 늘려줌
    */
   console.log(i)
    let rowDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let dateDiv = document.createElement('div');
    rowDiv.classList.add('page__list');
    
    titleDiv.setAttribute('class', 'page__title page__inner');
    titleDiv.innerHTML = pageData.list[i].title;

    authorDiv.setAttribute('class', 'page__writer page__inner');
    authorDiv.innerHTML = pageData.list[i].writer;

    dateDiv.setAttribute('class', 'page__date page__inner');
    dateDiv.innerHTML = pageData.list[i].date;

    rowDiv.append(titleDiv,authorDiv,dateDiv)
    container.append(rowDiv)
  }
}

document.getElementById('pageForm').addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.getAttribute('name') == 'page'){
    pagenation(e.target.value, dataListCount);
  } 
})

function isValue (val){
  if(val === undefined){
    return false;
  } 
  return true;
}

function colorChange() {
  if (isValue(document.getElementById('hello'))) {
    console.log('hello');
    document.getElementById('hello').style.color = 'red'
  } else {
    console.log('해당 엘리먼트가 없습니다')
  }
}

colorChange();

let testObj = {
  a: 22,
  b: 'abc',
  c: false
}

console.log('a' in testObj)

function meumeu(name){
  this.name = name;
  this.type = 'hello';
}

let b = new meumeu('소희');
console.log(b instanceof meumeu) ;
console.dir(meumeu)

let num = 32;
console.log(num.toString(2).split(''));

Array.prototype.firstLetter =function(e){
  return this[0]
}


console.log(
  ['1',2,3,4,5].firstLetter()
)
console.log(
  ['h','e','l'].firstLetter()
)
console.dir(Array)

console.log(parseFloat(num.toFixed(3)))
// console.log((0.1)n + 2n)
console.log(
  
)

document.write('hello')