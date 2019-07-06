
function getElm(attr){
  const elm = document.querySelectorAll(attr);
  return (elm.length >1)? Array.from(elm) : elm[0]
}

var result = getElm("#display");
window.addEventListener("message", function(e){
  var sourceOrigin = location.origin;
  if(e.origin !== sourceOrigin) return;
  result.innerHTML += e.data+"<br>";
})