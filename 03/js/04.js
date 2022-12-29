//for(초기값; 조건식; 증감식 ){}
        //5<5
for (let i=0; i<5 ; i++){
    document.write(`<br>${i}번째 반복입니다<br>`)
    // 초기값 i=0 >> 증감식 i++=1 >> 조건식 i=1<5 
}   // i=5<5 되는순간 false 끝
//-----------------------------------------

// for (let i=0; i<7; i++){
//     document.write(`<br>${<h></h>}재미있는 자바스크립트<br>`)
// }
for (let i=6; i>=1; i--){
    document.write(`<h${i}>재미있는 자바스크립트</h${i}>`)
    document.write("<h"+i+">h"+i+"재미있는 자바스크립트</h>")
}

//-------------------------------------------

//구구단 5단
// var j=0;
// for(var j=1; j<=9; j++){
//     let result=5 * j
//     document.write()
// }
// let i=5;
// for(let j=1; j<=9; j++){
//     let result="<br>"+i+"x"+j+"="+i*j+"<br>"
//     document.write(result)
// }

//--------------------------------------------

let a ="*"
for(let b=1; b<=9; b++){
    for(let b=2; b<=9; b++){
        document.write("<br>");
    }
}