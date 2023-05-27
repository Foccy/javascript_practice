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

//--- 재할당 없이 객체 프로퍼티 값 갱신,삭제하기

var person = {
  name : 'Kim'
}
person.name = 'lee' // 프로퍼티 값 갱신
person.address = 'seoul' //프로퍼티 동적생성
 
console.log(person);

//--- 하나의 객체를 공유하는 여러식별자

var person = {
  name: 'lee',
}
var copy = person; //얕은 복사

//--- 객체 비교

var person1 = {
  name : 'lee',
}

var person2 = {
  name : 'lee',
}

console.log(person1 === person2 ); // false
console.log(person1.name === person2.name ); // true

//--- 복사값 객체 비교

var person = {
  name: 'lee',
}
var copy = person;
console.log(copy === person); // true

copy.name = 'kim'// 사본을 통해 객체 변경
person.address = 'seoul' //원본을 통해 객체 변경
console.log(copy.address); // 원본을 바꾸면 사본도 변경, 가리키는 객체는 같다.
console.log(person.name === copy.name); // true