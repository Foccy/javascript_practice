// // [스위치]

// // 조건 case :
// let day="월"
// day="수"
// document.write(day+"요일에는")
// switch(day){
//     case "월" : document.write("오전 10시 수업시작")
//     break;
//     case "화" : document.write("<br> 오후 2시 수업시작")
//     break;
//     case "수" : document.write("<br> 오후 4시 수업시작")
//     break;
//     case "목" : document.write("<br> 오전 10시 수업시작")
//     break;
//     case "금" : document.write("<br> 오전 11시 수업시작")
//     break;
//     default : document.write("월요일에서 금요일까지만 입력하세요")
// }
//----------------------------
// 사용자로 부터 숫자를 입력받아 짝수인지 홀수 인지 숫자가 아닌지를 출력

// let num=(prompt("숫자입력"))
// let result=(num%2)
//     if(result=0){
//         alert("짝수")
//     }
//     else if(result=1)
//         alert("홀수")
//     else{
//         alert("숫자가 아닙니다.10")    
//     }
    

//------------------------------------
// //switch (자료){case 조건A: 실행A}
// //변수를 선언합니다
// const input=Number(prompt("숫자를 입력하세요","숫자"))
// //나머지가 0 false 나머지가 1true
// switch(input%2){
//  case 0 :alert("짝수입니다")
//  break;
//  case 1 :alert("홀수입니다")55
//  break;
//  default: alert("숫자가 아닙니다")
// }

//----------------------------------------

//[사용자로부터 숫자 2개를 입력받아 첫번째 입력받은 숫자가 큰지, 두번째 입력받은숫자가 큰지를 구하는 프로그램]

// let first = Number(prompt("첫번째 숫자입력"))
// let second = Number(prompt("두번째 숫자입력"))

//  if (first>second){
//     alert("첫번째가 큼")
//  }
//  else if(first<second){
//     alert("두번째가 큼")
//  }
//  else{
//     alert("숫자를쓰라고요")
//  }

 //---------------------------------------

 //[두수의 비교]

//  const a = Number(prompt('첫번째숫자',''))
//  const b = Number(prompt('두번째숫자',''))
//  if (a>b){ //두번째가 더 큰 경우, 두수가 같은경우
//     alert("첫번째 숫자가 더 큽니다")
//  }else if(a==b){
//     alert("두 수가 같습니다")
//  }else{
//     alert("두번째 숫자가 더 큽니다")
//  }

 //-------------------------------------------
 //[3의 배수확인 중첩 if문 ]

 let userNum=prompt("숫자를 입력하세요");
 //1. 3의 배수인지를 확인하여 결과를 alert으로 출력
 //userNum==null 사용자가 아무것도 입력안한경우
 if (userNum!==null){
 if (userNum%3==0){
     alert('3의배수맞음')
    }
    else {
        alert('3배수가 아니라고')
    }
 }else{
    alert("입력이 취소 되었습니다")
 }
    //2. 사용자가 아무것도 입력하지 않은 경우 '입력이 취소되었습니다'를 출력
//-----------------------------------------

    //위의 문장을 if else 삼항연산자를 사용하여 작성
    if(userNum!==null){
        userNum%3===0 ? alert("3배수ㅇㅇ"):alert("3배수 아니라고");
    }
    else{
        alert("입력취소")
    }