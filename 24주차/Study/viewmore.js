//처음에 3개 보여주고 viewmore누를때마다 3개씩 추가
//모든 리스트가 다 나오면 viewmore버튼 사라짐
let data = {
  list : [
    {
      id: 'pHr0phFtcWhsgZhSVe9F',
      title: '글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피',
      coverImage: 'https://cdn.class101.net/images/864f377f-93d9-4520-94de-19ca142c432f',
      price: 120000,
      score: 100,
      availableCoupon: false,
    },
    {
      id: 'B9vUv0E0ibc0X55kVVLr',
      title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
      coverImage: 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
      price: 560000,
      score: 200,
    },
    {
      id: '81x83ysiEHsHCBoeVh2O',
      title: '글씨가 주는 소소한 행복, Lettering Together!',
      coverImage: 'https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a',
      price: 320000,
      score: 300,
  
    },
    {
      id: 'ZXV8mCcvbpXKm5J5snUq',
      title: '붓펜으로 그려낸 보통날, 보통의 글씨',
      coverImage: 'https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e',
      price: 240000,
      score: 350,
  
    },
    {
      id: 'pHr0phFtcWhsgZhSVe9F',
      title: '글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피',
      coverImage: 'https://cdn.class101.net/images/864f377f-93d9-4520-94de-19ca142c432f',
      price: 120000,
      score: 100,
      availableCoupon: false,
    },
    {
      id: 'B9vUv0E0ibc0X55kVVLr',
      title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
      coverImage: 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
      price: 560000,
      score: 200,
    },
    {
      id: '81x83ysiEHsHCBoeVh2O',
      title: '글씨가 주는 소소한 행복, Lettering Together!',
      coverImage: 'https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a',
      price: 320000,
      score: 300,
  
    },
    {
      id: 'ZXV8mCcvbpXKm5J5snUq',
      title: '붓펜으로 그려낸 보통날, 보통의 글씨',
      coverImage: 'https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e',
      price: 240000,
      score: 350,
  
    },
    {
      id: 'pHr0phFtcWhsgZhSVe9F',
      title: '글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피',
      coverImage: 'https://cdn.class101.net/images/864f377f-93d9-4520-94de-19ca142c432f',
      price: 120000,
      score: 100,
      availableCoupon: false,
    },
    {
      id: 'B9vUv0E0ibc0X55kVVLr',
      title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
      coverImage: 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
      price: 560000,
      score: 200,
    },
    {
      id: '81x83ysiEHsHCBoeVh2O',
      title: '글씨가 주는 소소한 행복, Lettering Together!',
      coverImage: 'https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a',
      price: 320000,
      score: 300,
  
    },
    {
      id: 'ZXV8mCcvbpXKm5J5snUq',
      title: '붓펜으로 그려낸 보통날, 보통의 글씨',
      coverImage: 'https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e',
      price: 240000,
      score: 350,
  
    }
  ]
}



function getDataListMakeViewList(n){
  let cnt = n || 3;
  let rootEl = document.querySelector('.view__wrap')
  rootEl.innerHTML = '';
  for(let i = 0; i < cnt; i++){
    let boxWrap = document.createElement('div');
    boxWrap.classList.add('box__wrap');
  
    let innerBox = document.createElement('div');
    innerBox.classList.add('box');
  
    let titleP = document.createElement('p');
    titleP.classList.add('title');
  
    titleP.append(data.list[i].title);
    boxWrap.append(innerBox, titleP);
    rootEl.append(boxWrap);
}
}

getDataListMakeViewList();

let viewBtn = document.querySelector('.view__btn')
let viewCnt = 6;

viewBtn.addEventListener('click', function(){
  getDataListMakeViewList(viewCnt)
  viewCnt = viewCnt + 3
  if(viewCnt > data.list.length){
    getDataListMakeViewList(data.list.length-1);
    viewBtn.style.display = 'none';
  }
  //data.list 총길이 == btn클릭시 변화
})

