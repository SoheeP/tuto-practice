var Module = {};

Module.elt = function(name,attributes){
  var node = document.createElement(name);
  if(attributes && typeof attributes !== "string"){
    for(var attr in attributes){
      if(attributes.hasOwnProperty(attr)){
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }
  for(var i =2; i< arguments.length; i++){
    var child = arguments[i];
    if(typeof child == "string"){
      child = document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}

Module.querySelector = function(attr){
  return document.querySelector(attr);
}

Module.querySelectorAll = function (attr){
  return Array.prototype.slice.call(document.querySelectorAll(attr), 0)
}

Module.smoothScroll = function(id, durationTime){
  var TIME_INTERVAL = 30;
  var element = Module.querySelector(`#${id}`);
  if(!element) return;
  var ey = element.getBoundingClientRect().top;
  var dy = ey * TIME_INTERVAL/durationTime;
  var direct = dy>0 ? 1 : -1;
  var timer = setInterval(function(){
    scrollBy(0, dy); 
    ey -= dy;
    if( direct * ey <= 0) clearInterval(timer);
  }, TIME_INTERVAL);
}