//--- 유사 배열 객체

var str = 'string' // 문자열 선언했지만 배열로 접근 가능
console.log(str[0])
console.log(str.length)
console.log(str.toUpperCase())

//--- 값에 의한 전달

var score = 80
var copy = score

console.log(copy)

score= 70

console.log(score);
console.log(copy);

//---