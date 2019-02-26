document.getElementsByClassName('header__tab__box')[0].addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.getAttribute('data-name'))
  if (e.target.getAttribute('data-name') == 'product') {
    console.log('히히히힣 ㅅㅇ품')
  }
})

function createShopLink() {
  let shopLink = document.querySelector(".shop__link");
  for (let i = 0; i < shopdb.titleList.length; i++) {
    let aEl = document.createElement('a');
    aEl.classList.add("shop__link__an");
    aEl.textContent = shopdb.titleList[i].title;
    if (shopdb.titleList[i].bold) {
      aEl.classList.add("bold")
    }
    aEl.href = shopdb.titleList[i].ahref;
    shopLink.append(aEl);
  }
}
createShopLink();

//상품 이미지 삽입
for (let i = 0; i < (shopdb.prodList.length); i++) {//로우
  let divElrow = document.createElement('div');
  divElrow.classList.add('shop__row');
  console.log(divElrow)
  // let elProduct = document.querySelector('.shop__product')
}
for (let j = 0; j < 3; j++) {
  let ranNum = Math.floor(Math.random()*shopdb.prodList[0].list.length);
  let divElProduct = document.createElement('div');
  divElProduct.classList.add('shop__product');

  let aElProductLink = document.createElement('a');
  aElProductLink.classList.add('shop__link');
  aElProductLink.href = shopdb.prodList[0].list[ranNum].ahref;

  let imgElProduct = document.createElement('img');
  imgElProduct.classList.add('shop__img');
  imgElProduct.src = shopdb.prodList[0].list[ranNum].src;
  imgElProduct.alt = shopdb.prodList[0].list[ranNum].alt;

  let pElPrTop = document.createElement('p');
  pElPrTop.classList.add('shop__text__top');
  pElPrTop.textContent = shopdb.prodList[0].list[ranNum].text1;

  let pElprBtm = document.createElement('p');
  pElprBtm.classList.add('shop__text__bottom');
  pElprBtm.textContent = shopdb.prodList[0].list[ranNum].text2;

  aElProductLink.append(imgElProduct, pElPrTop, pElprBtm);
  divElProduct.append(aElProductLink);
  console.log(divElProduct)
}
let divElBox = document.getElementsByClassName('.shop__box')[0]
let elProdRow = document.getElementsByClassName('.shop__row')
divElBox.append(elProdRow);

console.log(shopdb.prodList.length)

