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
function createShopBox() {
  for (let i = 0; i < (shopdb.prodList.length); i++) {//로우
    let divElrow = document.createElement('div');
    divElrow.classList.add('shop__row');
    let rootEl = document.querySelector('.shop__box');
    // let elProdRow = document.getElementsByClassName('.shop__row');
    for (let j = 0; j < 3; j++) {

      let ranNum = Math.floor(Math.random() * shopdb.prodList[i].list.length);
      let divElProduct = document.createElement('div');
      divElProduct.classList.add('shop__product');

      let aElProductLink = document.createElement('a');
      aElProductLink.classList.add('shop__link');
      aElProductLink.href = shopdb.prodList[i].list[ranNum].ahref;

      let imgElProduct = document.createElement('img');
      imgElProduct.classList.add('shop__img');
      imgElProduct.src = shopdb.prodList[i].list[ranNum].src;
      imgElProduct.alt = shopdb.prodList[i].list[ranNum].alt;

      let pElPrTop = document.createElement('p');
      pElPrTop.classList.add('shop__text__top');
      pElPrTop.textContent = shopdb.prodList[i].list[ranNum].text1;

      let pElprBtm = document.createElement('p');
      pElprBtm.classList.add('shop__text__bottom');
      pElprBtm.textContent = shopdb.prodList[i].list[ranNum].text2;

      aElProductLink.appendChild(imgElProduct);
      aElProductLink.appendChild(pElPrTop);
      aElProductLink.appendChild(pElprBtm);
      divElProduct.appendChild(aElProductLink);
      divElrow.appendChild(divElProduct)
    }
    rootEl.appendChild(divElrow)
  }
}

createShopBox();