// 자리배치도
// 총입장객과 한줄에 앉을 인원을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오.
//전체입장객 td 총갯수
var memNum=prompt("입장객은 몇명인가요?")
//한줄에 앉을 사람 한줄에 td개수
var colNum=prompt("한줄에 몇명씩 앉습니까?")
var i,j,rowNum;

if(memNum%colNum===0){
    //= tr
    rowNum=parseInt(memNum/colNum);
}else{
    rowNum=parseInt(memNum/colNum) +1 ;
}
document.write("모두"+rowNum+"개의 줄이 필요합니다")
//table>tr>td
//총인원5, 한줄에 앉을 인원 2(colNum),
document.write("<table>");
for(i=0; i<rowNum; i++){//i=tr
    document.write("<tr>");
    for(j=1; j<=colNum; j++){
        var seatNo= i*colNum+j;
        if(seatNo>memNum) break; //조건이 틀리면 그이후의 것들 아예실행x
        document.write("<td>좌석"+seatNo+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
