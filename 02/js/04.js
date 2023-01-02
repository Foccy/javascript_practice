let x = 1;
//후위연산 x++
document.write(x++); // x=x+1 // 1(2)=1+1 >> 다음번 결과에 반영
document.write("<br>");
document.write(x); //2
document.write("<br>");
document.write(x++); // 2
document.write("<br>");
document.write(x++); // 3
document.write("<br>");
document.write(x++); // 4
document.write("<br>");
document.write(x); //5

//전위연산
x = 1;
document.write("<hr>", ++x); //2
document.write("<br>", ++x); //2(3)=2+1
document.write("<br>", ++x); //4=3+1
document.write("<br>", ++x); //5=4+1
document.write("<hr>", x++); //5=4+1 >> 후위: 다음번에 나옴
document.write("<br>", x++); //6=5+1 >>

z = 1;
document.write("<br>", ++z); //5=4+1
document.write("<br>", z++); //5=4+1
document.write("<br>", z); //5=4+1

let y = 1;
document.write(`<h1>${y--}${y}${--y}</h1>`); //y=y-1 //1=1-1=0
