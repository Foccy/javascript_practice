for(let i=0; true; i++){
    //무한반복
    alert(i+"번째 반복입니다")
    const isContinue=confirm //의사를 묻는
    ("계속하시겠습니까?");
    if(!isContinue){
        // break; //중지
        continue; //통과

    }
}
document.write("반복문 종료")