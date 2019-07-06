
/**
 * 레디 스테이터스 상태변화 이벤트
 */
// var req = new XMLHttpRequest();
// console.log("A: readyState = " + req.readyState);
// req.onreadystatechange = function(){
//   console.log("B: readyState = " + req.readyState);
// }
// req.open("GET", "data.txt");
// req.send();

/**
 * 리퀘스트 이벤트
 */
// var req = new XMLHttpRequest();

// req.addEventListener("loadstart", function(){
//   getElm("#view").innerHTML = 'Loading...';  
// });

// req.addEventListener("load", function(){
//   getElm("#view").innerHTML = req.responseText;  
// });

// req.addEventListener("error", function(){
//   getElm("#view").innerHTML = `error`;  
// });

// req.open("GET", "data.txt");
// req.send();



/**
 * 제이슨 파일 호출, json 파싱
 */

// var req = new XMLHttpRequest();
// var jsonObj;
// req.addEventListener("load", function(){
//   // jsonObj = JSON.parse(req.responseText);
//   jsonObj = req.responseText;
//   console.log(jsonObj);
// });

// req.open("GET", "data.json", true);
// req.send();

/**
 * response 이용방법
 */

var req = new XMLHttpRequest();
var jsonObj;
req.addEventListener("load", function(){
  jsonObj = req.response;
  console.log(jsonObj);
});
req.responseType = "json";
req.open("GET", "data.json", true);
req.send();


/**
 * JsonP 이용
 */
function show (data){
  console.log("name : " +data.name);
  console.log("price : " +data.price);
}

var url = "jsonp.js";
var script = document.createElement("script");
script.setAttribute('src', url);
document.getElementsByTagName("head")[0].appendChild(script);

var frameWindow = getElm("#frame").contentWindow;
var message = getElm("#message");
var button = getElm("#button");
// var targetOrigin = "./../../otherServerTesting/other.htm";
var targetOrigin = "/";
button.addEventListener("click", function(){
  frameWindow.postMessage(message.value, targetOrigin)
  message.value = ""
})


