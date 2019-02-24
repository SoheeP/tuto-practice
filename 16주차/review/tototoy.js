let nameValue = document.getElementById("nameValue");
let addrValue = document.getElementById("addrValue");
let emailValue = document.getElementById("emailValue");
let etcValue = document.getElementById("etcValue");

document.querySelector(".report__form").addEventListener("submit", function (e) {
  e.preventDefault();
  let createDiv = document.createElement("div");
  let createLi = document.createElement("li");

  let nameDiv = createDiv.classList.add("report__list__name");
  let addressDiv = createDiv.classList.add("report__list__address");
  let emailDiv = createDiv.classList.add("report__list__email");
  let etcDiv = createDiv.classList.add("report__list__etc");
  
  createLi.append(nameDiv);
  createLi.append(addressDiv);
  createLi.append(emailDiv);
  createLi.append(etcDiv);

  console.log(nameDiv)
})