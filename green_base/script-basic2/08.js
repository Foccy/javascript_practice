// 대화상자만들어보기
// 1. alert
// 2. confirm
// 3. prompt

var num1 = 30;
var num2 = 20;
num1 >= num2 ? alert("참일경우") : alert("거짓일경우");

var result = confirm("자바스크립트를 좋아하세요?");
console.log(result);
var theText = result ? "네" : "아니오";
document.write(theText);

var input = prompt("생년월일을 입력하세요", "");
document.write(input);

var num3 = 3;
var num4 = 2;
let java = num3 >= num4 ? "집입니다" : "집이아닙니다";
document.write("<br>" + java);
