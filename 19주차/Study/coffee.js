let coffeeMenuList = {
  menuList: [],
  coffeeList: {
    list: [{
      name: '딸기 스무디',
      price: 6500,
      temp: true,
    },
    {
      name: '딸기크림 프라푸치노',
      price: 7000,
      temp: true,
    },
    {
      name: '아메리카노',
      price: 3500,
      temp: false,
    }]
  }
}

coffeeMenuList.coffeeList.list.forEach((x) => {
  coffeeMenuList.menuList.push(x.name)
})

document.getElementById('coffeeSearchForm').addEventListener("submit", function (e) {
  e.preventDefault();
  let searchRootEl = document.querySelector('.coffee__result__menu');
  let searchValue = this.searchValue.value.trim();


  if (searchValue.length <= 0) {
    alert('검색어를 입력해주세요!')
  } else {
    searchRootEl.innerHTML = '';
    coffeeMenuList.menuList.forEach(x => {
      if (x.indexOf(searchValue) >= 0) {
        let liElsearch = document.createElement('li');
        liElsearch.classList.add('coffee__result__list');
        liElsearch.textContent = x;
        searchRootEl.append(liElsearch);
      }
    })
  }
})

document.querySelector('.coffee__result__menu').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('coffee__result__list')) {
    let newEl = e.target.cloneNode(true);
    newEl.setAttribute('class', 'coffee__select__list')
    document.querySelector('.coffee__select__menu').appendChild(newEl);

  }
})

document.querySelector('.coffee__select__menu').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('coffee__select__list')) {
    e.target.remove();
  }
})

document.querySelector('.coffee__select__count').addEventListener("click", function (e) {
  e.preventDefault();
  let countInput = document.querySelector('.coffee__count');
  
  if(+countInput.value >10 ){
    alert('10 x')
  }else {

  }

  if(e.target.classList.contains('coffee__count__up')){
    if(+countInput.value >= 10 ){
      alert('10 x')
    }else{
      countInput.value++
    }
  }

  if(e.target.classList.contains('coffee__count__down')){
    if(+countInput.value <= 1 ){
      alert('< 1 x')
    }else{
      countInput.value--
    }
  }
})

document.querySelector('.coffee__select__type').addEventListener('click', function (e) {
  e.preventDefault();
  let btnArr = document.querySelectorAll('.coffee__type');
  btnArr.forEach(x => {
    console.log(x)
    x.classList.remove('on');
  })
  if(e.target.classList.contains('coffee__type')){
    e.target.classList.add('on');
  }
})

document.getElementById('coffeeSelectForm').addEventListener("submit", function (e) {
  let selectMenuList = document.querySelector('.coffee__select__menu').children;
  let newListArr = Array.from(selectMenuList).map(x => x.textContent);

  let countInput = document.querySelector('.coffee__count');

  console.log(this.hotNcold.value)
  let orderInfo = document.querySelector('.coffee__order__text');
  orderInfo.textContent = `선택하신 메뉴는 ${newListArr}이며, 총 ${countInput.value}잔입니다.`

  if(this.orderBt.getAttribute('data-name') == 'ok'){
    e.preventDefault();
    this.orderBt.setAttribute('data-name', 'order');
    this.orderBt.textContent = 'Order';
  }
})