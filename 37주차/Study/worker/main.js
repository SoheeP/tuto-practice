var worker = new Worker("worker.js");
worker.postMessage("message")

worker.onmessage = function(e){
  var data = e.data;
  console.log(data, 'from: worker' + new Date());
}