//forEach : 배열의 요소를 콜백함수를 활용하여 반복순환
const arr=[11,22,33,44,55]
arr.forEach(function(value,index,array){ //배열의 요소를 반복하며 함수를 호출
    console.log(array)//(value,index)
})
//filter:원하는 값만 골라보기
let words=['스폰지밥','뚱이','다람이'];
const result=words.filter(function(value,index,array){
    return value.length >=4;
});
//alert(result)

//map : 배열을 새 값과 연결해서 새 배열로 저장
words=words.map(function(value,index){
    return value+"❓❔"
})
document.write(words[0])

// filter를 사용하여 arr 배열에서 짝수만 출력
const result1=arr.filter(function(value,b,c,d,e,f){
    return value%2==0;
})
document.write(`<br>${result1}`)