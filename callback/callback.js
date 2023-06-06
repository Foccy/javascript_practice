function first (a){
  console.log(1)
  a()
}
function second(){
  console.log(2);
}
first(second)

// first에 second 함수 투입
//first 함수에서는 매개변수 a에 second 함수(=콜백함수)를 받는다