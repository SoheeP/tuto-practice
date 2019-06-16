var map = new Map();
console.log(map); 
var zip = new Map([["Tom", "186"],["Huck", "270"]])
console.log(zip);

var zip = new Map();
zip.set("Tom", "186");
zip.set("Huck", "200");
zip.set("Huck", "190");
console.log(zip);

console.log(zip.get("Tom"));
console.log(zip.has("Tom"));
console.log(zip.has("Becky"));
zip.delete("Huck");
console.log(zip);
zip.clear();
console.log(zip);

var zip = new Map([["Tom", "186"],["Huck", "270"]]);
var iter = zip.keys();
console.log(iter);
for( var key of iter ){
  console.log(key);
};
var iter = zip.values();
for( var v of iter ){
  console.log(v);
};

var iter = zip.entries();
for( var v of iter ){
  console.log(v);
};

for( var [key, value] of zip){
  console.log(key, value);
};
zip.forEach((value, key, map)=>{
  console.log(key, value, map);
});

var set = new Set();
console.log(set);

var zip = new Set(["186", "200"]);
console.log(zip);

console.log(zip.size);

var zip = new Set();
zip.add("299");
console.log(zip);
console.log(zip.has("299"));

var zip = new Set(["186", "209"]);
var iter = zip.keys();
for(var v of iter){
  console.log(v);
};

function f(){
  function g(){
   function h(){
    console.trace();
   };
   h();
  };
  g();
};

f();


function testing(a){
  if(!(a instanceof Array)){
    throw new Error(`${a} is not an array`);
  }
};
// testing("abc");

try{
  console.log(abababac);
} catch (dd){
  console.log(dd);
}

console.log("과연 에러가 났는데도 코드가 it's 돌아갈지");

try{
  var p = testing(a);
  
}catch(e){

}
finally{
 console.log("hello");
}
console.log('퇴적물');

try{
  f();
} catch(e){
  console.log(e);
}
function f(){
  g();
}
function g(){
  h();
};
function h(){
  // throw new Error('오류가 발생했습니다.')
};

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
try{

  a.forEach((v, i, a)=>{
    if(i > 5){
      throw false;
    }
    return a[i] = v*v
  })
  
} catch(e) {
  if(e) throw e;
}

console.log(a);

var reg = new RegExp("abc");
var reg = /abc/;

var reg = /cat/;

console.log(
  reg.test("catdog"), reg.test("dddog")
);
console.log(
  reg.test("cats and dogs"), reg.test("CATS"), reg.test("concatenate")
);
console.log(
  reg.exec("catdog"), reg.exec("concaenate")
);

var reg = /Script/;
var result = reg.exec("javaScript");
console.log(result);

console.log("\abcd\\e");
var reg = /\\d+/;
console.log(reg.test("\d"));

var reg = /[abc][d]/;
console.log(
  reg.test("ddad")
);

console.log(
  /[0123456789]/.test("0 bottles")
);
console.log(
  /[가-힣]/.test("훟")
);

console.log(
  /<h[1-6]>/.test('<h1></h1>')
);

console.log(
  /[^0-9]/.test("175")
);

console.log(
  /c.t/.test('c호t')
);

console.log(
  /c..l/.test("c오오l")
);

var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(
  dateTime.test("it's 2016-08-27 10:15"), '날짜아'
);

console.log(
  /\w/.test("?")
);

console.log(
  / \w\w/.exec(" hddddddddddddddddddddddd")
  // \s를 생략하고 앞에 띄어쓰기 넣어도 됌
);

console.log(
  /[.^]/.test("^")
);

console.clear();

var reg = new RegExp("c.at");
console.log(reg.test("coat"));

var reg = /\d{4}/;
console.log(reg.exec("100000000000000000000000000000000000324132342"));

var reg = /[a-z]{6,12}/;
console.log(
  reg.exec("en gl ishtruefalse ^_^? true?")
);

var reg = /[a-z]{6,}/;
console.log(
  reg.exec("dsalfnn")
);

var dateTime = /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/;
console.log(
  dateTime.exec("it's 2016-08-27 10:15")
);

var reg = /[a-z]{4}\d?/;
console.log(
  reg.exec("aaaa33")
);

var reg = /https?/;
console.log(reg.exec("httpss"));

var reg = /\s+Tom\s+/;
console.log(
  reg.exec("Tom         ")
);

var reg = /oh+\sno!/;
//ohhhhhhhhhhhh no! oooooooooooooooooooooooooooooooohhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnooooooooooo;

console.log(
  reg.exec("ohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh no!")
);

var reg = /o+h+n+o+/;

console.log(
  reg.exec("oooooooooooooooooooooooooooooooohhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnooooooooooo")
);


var reg = /[a-z]{4}\d*/;

console.log(
  reg.exec("safc4321132423")
);

var reg = /Java.*/;

console.log(
  reg.exec("I love JavassssssssssssssssssssssssssssssScript")
);

var reg = /0*?1/;
console.log(
  reg.exec("000")
);

var bark = /bow+(woo+f)+/;

console.log(
  bark.exec("bowwwwwwwwwoofwoofwooooooooof")
);

var header = /<(h[1-6])>.*<\/\1>/;

console.log(
  header.exec("<h1>JavaScript%%%%%%%% it's so beautiful</h1>")
);

var postalCode = /우(?:\d{3})-(?:\d{3})/;
console.log(
  postalCode.exec("우123-132")
);

var jsFirst = /^JavaScript/;
console.log(
  jsFirst.exec("JavaScript is fuck.. JavaScript")
);

var jsLast = /JavaScript$/;
console.log(
  jsLast.exec("Wow JavaScript")
);

var reg = /\bcat\b/;
console.log(
  reg.exec("wow cat")
);

console.log(
  /Java(?=script)/.exec("I like Javascript")
);

console.log(
  /Java(?!=script)/.exec("I like JavaCoffee")
);

var fruit = /apple|peach|orange/;
console.log(
  fruit.test("2 peach")
);

console.log(
  fruit.exec("apple orange")
);

var countFruit = /\b(\d+)\s(apple|peach|orange)s?\b/;
console.log(
  countFruit.exec("10 apples")
);

console.log(
  /\bcat\b/i.exec("I like Cat")
);

var reg = /^cat/im;

console.log(
  reg.exec("Dog\nCat\nMonkey")
);

var reg = /at$/im;

console.log(
  reg.exec("Dog\nCat\nMonkey")
);

console.clear();

var s = "1 little, 2 little indian.";
console.log(
  s.search(/little/)
);
console.log(
  s.search(/\d/)
);
console.log(
  s.search(/\bindian/)
);
console.log(
  s.search(/\\b/)
);

console.log(
  s.replace(/indian/, "boy")
);

console.log(
  s.replace(/little/g, "big")
);

var person = "Tom, 010-2344-1235";
console.log(
  person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g, "+82-$1")
);

var date = "오늘은 2016년 9월 10일 입니다.";
console.log(
  date.replace(/(\d+)년\s(\d+)월\s(\d+)일/, "$1-$2-$3")
);

var name = "Tom Sawyer";
console.log(
  name.replace(/(\w+)\s(\w+)/, "성: $2 이름: $1")
);

var address = "121-842 서울특별시 마포구 월드컵로10길 56";
console.log(
  address.replace(/\d{3}-\d{3}/, "우: $&")
);

var text = "투명 드래곤이 [우가우가우가우가] 하고 울부짖었따.";
text.replace(/[우가우가우가우가]/g, function (tzt){
  console.log(tzt);
});

var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
var text = "Tom의 홈페이지 url은 http://www.example.com/~tom 입니다.";
console.log(
  text.match(url)
);