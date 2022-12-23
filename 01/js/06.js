//데이터형 활용
//문자자료형 string
// let x;
// let y; 둘이 합친것 똑같음
let x,y;
x=7+5;
y="7"+5;
//document.write(x+y)
//자바스크립트에서 표현식을 작성할때 문자는 따옴표로 묶고 변수나숫자는 안묶음
document.write(x)//12
document.write(y)//글자 7 글자5
document.write("<br>")
//태그도 문자열 취급

document.write("y")//글자 y
//메서드 임자있는 함수
const wakeup="선문아 밥먹고 학교가야지"
document.write('<h1 style="color:green">' + wakeup + '</h1>')

//es6에 추가된 템플릿 리터럴
document.write(`<h1 style="color:green">${wakeup}</h1>`);
