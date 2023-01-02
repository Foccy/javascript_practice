// 삼항연산자 : 항이 3개
// 조건?참일때:거짓일때
let your = "어려워요";
let sutdy = your == "어려워요" ? "천재이시군요" : "복습하세요";
document.write(`자바스크립트가 ${your} <h1>${sutdy}</h1>`);

var price1 = 3000;
var price2 = 6000;
var price3 = 3000;
var total = price1 + price2 + price3;
var result = total > 10000 ? total - 10000 + "원 초과" : "돈 관리 잘 했어요!";
document.write(`${result}`);

let price = 1000;
let price4 = 2000;
let price5 = 3000;
var total1 = price + price4 + price5;
var result1 =
  total1 >= 6000
    ? total1 - 10000 + "사람입니다"
    : total1 - 9000 + "사람이아닙니다";
document.write("<br>" + result1);
