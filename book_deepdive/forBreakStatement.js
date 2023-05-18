//문자열에서 특정 문자의 인덱스(위치)를 검색하기 
const string = 'hello world'
const search = 'o';
let index

for(let i = 0; i<=string.length; i++){
    if(string[i]===search){
        index=i;
        break;
    }
}

console.log(index)
