const 테스트=function(콜백함수){
    for(let i=0; i<5; i++){
         콜백함수(i)
    }
  }
  const 함수=function(콜백함수의매개변수){
    document.write(`<h1>${콜백함수의매개변수}번째 안녕하세요</h1>`)
  }
  테스트(함수)