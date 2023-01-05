var el1=document.getElementById("one");
console.log(el1);
var el2=document.getElementsByTagName("li");
console.log(el2);


for(let i=0; i<=2; i++){
    el2[i].style.backgroundImage='url(http://qwerew.cafe24.com/example/javascript/chicken.png)'
    el2[i].style.backgroundSize='20px';
    el2[i].style.backgroundRepeat='no-repeat';
    }
//[0,1,2,].style.background=yellow

for(let blue of el2){
    blue.style.backgroundColor='blue'
}

//클래스 선택
var el4= document.getElementsByClassName("highlight");
el4[1].style.cssText="width:500px; margin:auto; background:pink;"//css속성 여러개 -> 추가x, 수정됨.

//querySelector
var el5=document.querySelector(".highlight");
el5.style.color="red";
console.log(el5);//단일요소만 반환
var el6=document.querySelectorAll(".highlight");
// el6.style.color="orange";
console.log(el6);//단일요소만 반환

for(var k =0; k < el6.length; k++){
    el6[k].style.color="orange"
}

for(a of e16){
    a.style.backgroundColor="black";
} 