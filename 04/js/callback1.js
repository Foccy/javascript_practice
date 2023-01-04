const 테스트= function(a){
    // console.log(a)
    a()
}
const 함수=function(){
    document.write("<h1>자바스크립트에서 매개변수를 함수로 전달받는거=>콜백함수</h1>")
}
테스트(함수)
//다른 자료형 전달시 오류발생
테스트(10)

const 테스트2=function(콜백함수){
    콜백함수(10)
};
const 함수2=function(콜백함수_매개변수){
    document.write(`${콜백함수_매개변수} 번째<br>`)
};

테스트2(함수2)

const 테스트3= function(s){
    
}
