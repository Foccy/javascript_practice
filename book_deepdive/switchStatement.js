// 문자열에서 특정 문자의 개수를 세기 continue문
const string = 'hello world';
const search = 'l';
let count = 0;

for(let i = 0 ; i<=string.length; i++){
    if(string[i]!==search) continue
    count++;
}
console.log(count)

