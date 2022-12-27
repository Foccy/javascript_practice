let gender= prompt("당신의 성별을 입력하세요","");
let age= prompt("당신의 /나이를 입력하세요","");
age=Number(age);
console.log(typeof(age));
let result= age>=20 && age<30 && gender == "여성";
document.write(result);
// prompt 함수로 반환되는 값은 string 이므로 계산식을 사용해야할경우 자료형을 변환해야 한다.
