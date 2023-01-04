const 테스트=function(배열, 콜백함수){
    for(const 값 of 배열){// for of 배열의 길이만큼
        콜백함수(값)
    }
}
const 함수 =function(콜백매개변수){
    document.write(`${콜백매개변수}번째가 뭔말임?`)
}
테스트([1,22,333],함수)

const 테스트1=function(왜, why){
    for(const 응 of 왜){
        why(응)
    }
}
const 왜 = function(암거나){
    document.write(`${암거나}번만 살려 사람`)
}
테스트1([1,2,3,4,5],왜)