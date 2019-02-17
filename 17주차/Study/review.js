let divNumber = document.getElementById("number");

divNumber.innerHTML = (localStorage.getItem("num")) ? localStorage.getItem("num"): "0";

document.getElementById("plus").addEventListener("click", function(){
  let plusNum = ++ divNumber.textContent;
  localStorage.setItem("num", plusNum);
  divNumber.innerHTML = localStorage.getItem("num")
  console.log(localStorage)
})

document.getElementById("minus").addEventListener("click", function(){
  let minusNum = -- divNumber.textContent;
  localStorage.setItem("num", minusNum);
  divNumber.innerHTML = localStorage.getItem("num")
  console.log(localStorage)
})


document.getElementById("insNumPlus").addEventListener("click", function () {
  let customNum = document.getElementById("insNum");
  if(isNaN(customNum.value)){
    alert("숫자를 입력해주세요")
    customNum.value = "";
  } else {
  let value = +customNum.value;
  let wantPlus = value + +divNumber.textContent;
  localStorage.setItem("num", wantPlus);
  console.log(localStorage);
  divNumber.innerHTML = localStorage.getItem("num")
}
})