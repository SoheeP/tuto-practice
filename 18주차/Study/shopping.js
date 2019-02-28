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
  shopLink.addEventListener("mouseover", function (e) {
    console.log(e.target)
    e.target.classList.toggle('underline');
  })
}

function createShopBox() {
  for (let i = 0; i < (shopdb.prodList.length); i++) {//로우
    let divElrow = document.createElement('div');
    divElrow.classList.add('shop__row');
    let rootEl = document.querySelector('.shop__box');
    let ranCheck = [];
    for (let j = 0; j < 3; j++) {
      let ranNum = Math.floor(Math.random() * shopdb.prodList[i].list.length);
      if (ranCheck.includes(ranNum)) {
        j = j - 1;
        continue;
      } else {
        ranCheck.push(ranNum);
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
    }
    rootEl.appendChild(divElrow)
  }
}

function pageBtn() {
  let shopBtn = document.querySelectorAll('.shopBtn');
  let currentPage = document.querySelector('.number__current');
  let shopBox = document.querySelector('.shop__box');
  currentPage.innerHTML = 1;
  for (let i = 0; i < shopBtn.length; i += 1) {
    shopBtn[i].addEventListener("click", function () { 
      if (shopBtn[i].classList.contains('btn__prev')) {
        if (parseInt(currentPage.innerHTML) <= 1) {
          currentPage.innerHTML = 1;
        } else {
          shopBox.innerHTML = '';
          createShopBox();
          currentPage.innerHTML = +currentPage.textContent - 1;
        }
      } else {
        if (parseInt(currentPage.innerHTML) >= shopdb.prodList.length) {
          currentPage.innerHTML = +shopdb.prodList.length;
        } else {
          shopBox.innerHTML = '';
          createShopBox()
          currentPage.innerHTML = +currentPage.textContent + 1;
        }
      }
    })
  }
  document.getElementsByClassName('number__all')[0].innerHTML = shopdb.prodList.length;
}

function createNews() {
  let rootEl = document.querySelector('.news__box');
  let ranCheck = [];
  for (let i = 0; i < shopdb.newsList.length; i++) {    
    let ranNum = Math.floor(Math.random() * shopdb.newsList.length);
      if (ranCheck.indexOf(ranNum) > -1) {
        i = i - 1;
        continue;
      } else {
        ranCheck.push(ranNum);
        let divElNewsRow = document.createElement('div');
        divElNewsRow.classList.add('news__row');
        let aElNews = document.createElement('a');
        aElNews.classList.add('news__link');
        aElNews.href = shopdb.newsList[ranNum].ahref;

        let divElNewsName = document.createElement('div');
        divElNewsName.classList.add('news__name', 'news__text_box');
        divElNewsName.textContent = shopdb.newsList[ranNum].name;

        let divElNewsContent = document.createElement('div');
        divElNewsContent.classList.add('news__content', 'news__text_box');

        let spanElNewsContentB = document.createElement('span');
        spanElNewsContentB.classList.add('news__black');
        spanElNewsContentB.textContent = shopdb.newsList[ranNum].text1;

        let spanElNewsContentG = document.createElement('span');
        spanElNewsContentG.textContent = shopdb.newsList[ranNum].text2;
        if (shopdb.newsList[i].color === true) {
          spanElNewsContentG.classList.add('news__green')
        } else {
          spanElNewsContentG.classList.add('news__black')
        }
        divElNewsContent.appendChild(spanElNewsContentB);
        divElNewsContent.appendChild(spanElNewsContentG);
        aElNews.appendChild(divElNewsName);
        aElNews.appendChild(divElNewsContent);
        divElNewsRow.appendChild(aElNews);

        rootEl.appendChild(divElNewsRow); 
      }      
  }
}

createShopLink();
createShopBox();
pageBtn();
createNews();

document.querySelector(".news__refresh").addEventListener("click", function(){
  document.querySelector(".news__box").innerHTML = '';
  createNews();
})

