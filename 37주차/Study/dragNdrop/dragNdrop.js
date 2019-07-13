
// window.onload = function(){
//   var dargbox = getElm("#dragbox");
//   var dropbox = getElm("#dropbox");

//   dropbox.addEventListener("dragenter", function(e){
//     e.target.style.borderColor = "red";
//   })
//   dropbox.addEventListener("dragleave", function(e){
//     e.target.style.borderColor = "grey";
//   })
//   dropbox.addEventListener("drop", function(e){
//     e.target.style.borderColor = "blue";
//     console.log('drop');
//   })
// }

window.onload = function(){
  var color = getElm('#color');
  var dropbox = getElm('#dropbox');

  color.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("hello", e.target.value);
    console.log(e.target.value);
  })
  dropbox.addEventListener("dragover", function(e){
    e.preventDefault();
  })
  dropbox.addEventListener("drop", function(e){
    // e.preventDefault();
    e.target.style.backgroundColor = e.dataTransfer.getData("hello");
  })

}


var previewer = getElm('#previewer');
var uploadInput = getElm('#uploadInput');

uploadInput.addEventListener("change", function(e){
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.addEventListener('load',function(){
    previewer.innerHTML = "";
    previewer.append(
      elt('img',{src:reader.result,class:"image"})
    )
  })

  reader.readAsDataURL(file)
})
