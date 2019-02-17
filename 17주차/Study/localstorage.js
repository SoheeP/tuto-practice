//  localStorage.setItem("name", "hello")
//주석처리해도 저장된거다! 대신 key값이 동일하면 값을 계속 덮어씀
// console.log(localStorage);

// document.body.innerHTML = localStorage.getItem("name");

console.log(localStorage);

document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this.username.value)
  console.log(this.password.value);
  localStorage.setItem(this.username.value, "username");
  localStorage.setItem("password", this.password.value);
  window.location.reload();
})

document.getElementById("delete").addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
})