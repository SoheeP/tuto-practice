
let targerBox = document.getElementsByClassName('news')[0];

// function newsArr() {
//   for (var i = 0; i < db.list.length; i += 1) {
//     let divElNameNewsSmall = document.createElement('div');

//     divElNameNewsSmall.classList.add('newsSmall');
//     divElNameNewsSmall.style.backgroundImage = `url(${
//     db.list[i].src
//   })`

//     let divElNameNewsA = document.createElement('div');
//     divElNameNewsA.classList.add('news__a')


//     let divElNameNewsAInner = document.createElement('div');
//     divElNameNewsAInner.classList.add('news__a__inner');

//     let aNewsSubscr = document.createElement('a');
//     aNewsSubscr.classList.add('news__btn');
//     aNewsSubscr.textContent = db.list[i].title;
//     aNewsSubscr.href = db.list[i].ahrefSubcr;

//     let aNewsView = document.createElement('a');
//     aNewsView.classList.add('news__btn');
//     aNewsView.textContent = db.list[i].subTitle;
//     aNewsView.href = db.list[i].ahrefView

//     divElNameNewsAInner.append(aNewsSubscr, aNewsView);
//     divElNameNewsA.append(divElNameNewsAInner)
//     divElNameNewsSmall.append(divElNameNewsA);

//     targerBox.append(divElNameNewsSmall);
//   }
// }

function newsArr() {
  targerBox.innerHTML = ''; // 초기화
  let rancheck = [];
  for (var i = 0; i < db.list.length; i += 1) {
    let ranNum = Math.floor(Math.random() * db.list.length); 
    if (rancheck.includes(ranNum)) {
      console.log('중복!')
      i =i- 1;
    } else {
      rancheck.push(ranNum);
      let divElNameNewsSmall = document.createElement('div');

      divElNameNewsSmall.classList.add('newsSmall');
      divElNameNewsSmall.style.backgroundImage = `url(${
        db.list[ranNum].src
        })`

      let divElNameNewsA = document.createElement('div');
      divElNameNewsA.classList.add('news__a')

      let divElNameNewsAInner = document.createElement('div');
      divElNameNewsAInner.classList.add('news__a__inner');

      let aNewsSubscr = document.createElement('a');
      aNewsSubscr.classList.add('news__btn');
      aNewsSubscr.textContent = db.list[ranNum].title;
      aNewsSubscr.href = db.list[ranNum].ahrefSubcr;

      let aNewsView = document.createElement('a');
      aNewsView.classList.add('news__btn');
      aNewsView.textContent = db.list[ranNum].subTitle;
      aNewsView.href = db.list[ranNum].ahrefView

      divElNameNewsAInner.append(aNewsSubscr, aNewsView);
      divElNameNewsA.append(divElNameNewsAInner)
      divElNameNewsSmall.append(divElNameNewsA);

      targerBox.append(divElNameNewsSmall);
    }
   
  }
  console.log(rancheck);
}

newsArr();

document.getElementById('uploadForm').addEventListener("submit", function (e) {
  e.preventDefault();
  targerBox.innerHTML = ''; // 초기화
  db.list[db.list.length - 1].title = this.textInput.value;
  this.textInput.value = '';
  newsArr();
})





let abc = [1, 2, 4, 6];
let bbb = [];
for (var i = 0; i < abc.length; i++) {
  let uNum = Math.floor(Math.random() * abc.length);
  if (bbb.includes(uNum)) {
    i = i - 1;
  } else {
    bbb.push(uNum)
  }
}

// console.log(bbb, 'num')