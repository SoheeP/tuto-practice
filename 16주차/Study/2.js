//Todo List

//input.id.checked 하면 checked되있을때 true, 아닐때 false

let todo = document.querySelector(".todo");
let addBtn = document.querySelector(".insert");
let todo_list_ul = document.querySelector(".todo_list")


addBtn.addEventListener("click", function () {
  if (todo.value.trim() < 1) {
    alert("내용을 입력해주세요")
  } else {

    let todo_list_li = document.createElement("li");
    let deleteBtn = document.createElement("span");
    let content = document.createElement("div");

    todo_list_li.classList.add("todo_item");
    deleteBtn.classList.add("delete");
    content.classList.add("todo_content");

    deleteBtn.textContent = "x";

    todo_list_li.prepend(content)
    todo_list_li.append(deleteBtn);
    todo_list_ul.append(todo_list_li);
    content.textContent = todo.value;
    todo.value = "";

    todo_list_li.addEventListener("click", function (e) {
      /** 
       * console.log(e.target) 내가 실제로 클릭한 영역
       * console.log(e.currentTarget); 이벤트를 실행한 그 자신
       * console.log(e.currentTarget.children) 이벤트를 실행한 그 자신의 자식요소(배열로 가져온다)
      */

      console.log([...e.currentTarget.children])
      ;[...e.currentTarget.children][0].classList.toggle("checked")
      //앞의 ; 은 혹시모를 오류를 대비. 그리고 ...은 앞으로 생길 currentTarget의 children을 배열로 만들어주겠다는 것!
      console.log(e.target)
      console.log(e.target.className === 'delete')
      if(e.target.classList.contains("delete")){
        this.remove();
      }
    })
    //e.target을 이용해서 부모자체를 삭제하면 지워짐 parentsElement
  }
})

