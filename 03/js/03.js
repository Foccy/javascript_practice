const item=["사과","배","한라봉","바나나"]
document.write(`원래 배열: ${item} <br>`)
//인덱스번호로 제거
//시작할 인덱스번호, 삭제할 요소의 갯수
item.splice(2,1)
document.write(`원래 배열: ${item} <br>`)

const animals=['강아지','고양이','보노보노','곰'];
document.write(`<p>동물은 ${animals} 입니다</p>`)
// indexOf() 값이 있으면 index 번호를, 없으면 -1을 반환하는 함수
const index=animals.indexOf('보노보노'); //'보노보노'넣어보자
console.log(index)
//보노보노 삭제, animals 출력

// animals.splice(2,1)
// document.write(`${animals}`)
//-------------------------
animals.splice(index,1)
document.write(`<p>진짜 동물은 ${animals}입니다 </p>`)


//스폰지밥을 마지막 배열로 추가후 화면출력

// animals[animals.length]='스폰지밥'
// document.write(`${animals}`)
//-------------------------
animals.splice(animals.length,0,'스폰지밥');
document.write(`<p>새로운 동물은 ${animals}입니다 </p>`)