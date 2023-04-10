// 1. 배열추가 .push()
const todos=['우유구매','업무메일확인','필라테스수업'];
todos.push('망고목욕')
todos.push('망고산책')
document.write(`<h1>오늘스케쥴:${todos}</h1>`)

// 2. 배열추가 - index 활용한 추가 
const basket=["소세지","소주","햇반"];
basket[9]="귤"
// 3. 배열추가- length 활용한 추가 마지막++ 
basket[basket.length]="삼겹살";
basket[basket.length]="튀김";
basket[basket.length]="밥";
basket[basket.length]="김";
document.write(`<hr><h1>저녁식단 : ${basket}</h1>`)