//--- 1. 객체
var person = {
  name: 'Lee',
  sayHallo : 'lee',
  //say-hallo : 'lee' xx
  'say-hallo' : 'lee',
  acc : function(){  //메소드
    console.log(`${this.sayHallo} jaafdafdasfdsfad`);
  }
}

console.log(person); 
console.log(person.acc);

//---빈객체

const a = {}
console.log(a) 

//---네이밍 준수

const naming = {
  firstName : 'kim',
  'last-name' : 'jayj'
}

//--- 빈문자열 프로퍼티

var foo = {
  '' : '' 
}
console.log(foo);

//--- 프로퍼티 추가

var plus = {
  name : 'kim'
}
plus.age = 26
console.log(plus);

//--- 프로퍼티 삭제

var del = {
  name : `kim`,
  age : 21
}

delete del.age 
console.log(del);

//--- 축약 표현

var x=1, y=1

var xy = {
  x : x,
  y : y
}
console.log(xy);