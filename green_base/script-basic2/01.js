//산술연산자 +, -, *, / , % * /
const x=75;
const y=87;
const add=x+y;
document.write("국어점수:"+x+"<br>");
document.write("수학점수:"+y+"<br>");
document.write("총점:"+add+"<br>");
document.write("평균:"+add/2+"<br>");

// 템플릿리터럴 백틱'문자 그대로 출력'
document.write(`국어점수=${x}<br>${y}<br>${add}<br>${add/2}`)