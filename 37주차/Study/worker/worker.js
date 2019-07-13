importScripts("prime.js");

onmessage = function(e){
  console.log('worker message receive');
  var data = e.data;

  postMessage(`${data} ${hello(5)}`)
}

console.log(self);