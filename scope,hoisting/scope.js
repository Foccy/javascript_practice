//1. 전역변수에 값을 담는다
//2. 콘솔을 옮긴다
//3. 리턴문에 sum 전달
//4. 다른 함수에 인자로 전달
// 

let sum="전역";//전역 변수선언 

function addNumber() {
	let sum="지역"; //지역변수 선언  
  console.log(sum)
}
addNumber();
console.log(sum);	//전역




























