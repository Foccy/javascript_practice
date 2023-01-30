const container=document.querySelector(".container");
const child=document.querySelector(".child");
const containerW=container.clientWidth;
console.log('container의 clientWidth:', containerW);

let childStyle=Number(window.getComputedStyle(child).getPropertyValue('padding-left')
.split('px',1)[0]);//px문자 기준으로 1개 잘라냄 0번째 요소취득
//set
const calc=containerW-childStyle;
console.log(calc);
//child.style.width=calc;


let pseudo=window.getComputedStyle(child,":before").content;
console.log(pseudo);