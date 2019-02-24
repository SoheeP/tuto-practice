document.getElementsByClassName('header__tab__box')[0].addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.getAttribute('data-name'))
  if(e.target.getAttribute('data-name') == 'product'){
    console.log('히히히힣 ㅅㅇ품')
  }
})
function createShopLink(){
let shopLink = document.querySelector(".shop__link");
for(let i = 0; i < shopdb.titleList.length ; i++){
  let aEl = document.createElement('a');
  aEl.classList.add("shop__link__an");
  aEl.textContent = shopdb.titleList[i].title;
  if (shopdb.titleList[i].bold){
    aEl.classList.add("bold") 
  }
  aEl.href = shopdb.titleList[i].ahref;
  shopLink.append(aEl);
}
}
createShopLink();
