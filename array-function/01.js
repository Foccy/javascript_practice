// 배열선언1- 빈배열 선언 후 값 할당
let str=[];
//자바스크립트는 문자형은 배열로 다룸
str = '선문아그만자';
document.write(str);
document.write(str[0]+str[1]+str[2]+str[str.length-1]+'<hr>');
//배열의 총길이
document.write(str.length); //6
console.log(str);

//2- 배열의 생성2
const arr=[]
arr[0]='우'
arr[1]='영'
arr[2]='아'
arr[3]='ㄱ'
arr[4]='ㅁ'
arr[5]='ㅈ'
// arr[0]='우'
console.log(arr)
document.write(arr)

const arr1=[273,'string',true, function(){},{},[273,106]]
console.log(arr1);
const arr2=[,,,]
arr2[1]="망"
console.log(arr2);

//3- 배열생성
const arr3 = new Array(1,2,3);
console.log(arr3[arr3.length-2]);
const arr4=new Array(3);
console.log(arr4);

const fruits=['배','사과','키위','바나나']
fruits[4]='소세지'
//화면에 fruits의 총길이를 출력
document.write("<br>"+fruits[1]+fruits[fruits.length-3]+fruits[0]+fruits[2]+fruits[3]+fruits)
