var 그럴수있지 = document.querySelector('h1');
그럴수있지.classList.add('응');

$(document).ready(function(){
  'use strict';
  console.log('main.js loaded');
  
  
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'))

  //TODO
  paper.view.draw();

  // var c = Shape.Circle(100, 200, 50);
  var c;
  for (var x=25; x<400; x+=50){
    for(var y=25; y<400; y+=50){
      c = Shape.Circle(x, y, 50);
      c.fillColor = 'green';
    }
  }
})

