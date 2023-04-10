// let score =Number(prompt("시험점수입력해","0"))

// if (score>=70){
//     document.write("합격")
// }else{
//     //조건없이, if 제외한 모든 나머지들
//     document.write("불합격")
// }

//---------------------------------------------------

//[if else if]
const date=new Date();
const hour=date.getHours();
if(hour<11){//0~10
    alert("아침먹고 학교가야지");
}else if(hour < 15){//11~14 남은것들중에 다시
    alert("점심먹고 태권도")
}else{//15~24
    alert("저녁먹고 자야지")
}