//  let span = document.createElement("span")
//  span.textContent = "Hello"
//  span.classList.add("test")

//  let div = document.createElement("div")
//  div.append(span)
//  document.body.prepend(div)


//  console.log(span)

 //div의 형제로 button id > delbt text 삭제버튼

//  let btn = document.createElement("button")
//  btn.textContent = "삭제버튼"
//  btn.id = "delBt"
//  //setAttribute 해도 되고
//  btn.setAttribute("class", "delTest delBt")
//  div.after(btn)
//  console.log(btn)

//  btn.addEventListener("click", function () {
//    span.classList.remove("test")
//  })

 /**
  * 이름, 주소, 이메일(셋다 값이 있어야만 추가)
  * 내용이 추가 되는거. 추가버튼
  * 클래스 부여해서 꾸미기
  * 라인 총갯수
  * 일정갯수(10개)가 생기면 스크롤
  */



 let addBtn = document.querySelector(".addBtn");
 let form = document.getElementById("inputForm");
 //input submit 버튼 자체에 click이벤트를 막으면 click자체를 막아버려서 input타입들이 체크를 못함
 // input 태그들은 submit될때 체크하므로, form이 submit될때 전송되는 것까지만 막고, submit은 진행되게 해줘야 input 타입들이 체크함 
 form.addEventListener("submit", function (e) {
   e.preventDefault();
   let addNameValue = document.getElementById("addName").value;
   let addAddressValue = document.getElementById("addAddress").value;
   let addEmailValue = document.getElementById("addEmail").value;

  

  console.log(this.fullName.value)
   if(addNameValue.trim() < 1 || addAddressValue.trim() < 1 || addEmailValue.trim() < 1){
     alert("내용을 모두 채워주세요.")
   } else {
   let infoDiv = document.createElement("div")
   infoDiv.classList.add("infoDiv");
   
   let infoName = document.createElement("div")
   infoName.classList.add("infoName");
   
   let infoAddress = document.createElement("div");
   infoAddress.classList.add("infoAddress");

   let infoEmail = document.createElement("div")
   infoEmail.classList.add("infoEmail");

   let getListBox = document.querySelector(".listBox");

   getListBox.prepend(infoDiv);
   infoDiv.append(infoName);
   infoDiv.append(infoAddress);
   infoDiv.append(infoEmail);

   infoName.textContent = addNameValue;
   infoAddress.textContent = addAddressValue;
   infoEmail.textContent = addEmailValue;

  this.fullName.value = "";
  this.address.value = "";
  this.email.value = "";
  //초기화는 원래 최상단이지만, alert될때마다 값이 비워지는 걸 막기 위해 하단에 위치
  //초기화 할때 변수명 = 엘리먼트.value 해놓고 변수명 = ""; 해버리면 변수명 자체에 담긴게 ""게 되버리니까 안먹힘 ^^!!
  }  
 })
