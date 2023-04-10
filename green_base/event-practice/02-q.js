$(function(){
    //id선택
    //document.getElementById("one").style.background = "yellow";
    $("#one").css("background","yellow")
    var el1=$("#one"); //id를 변수에 저장
    el1.css("color","red") //변수에 css메서드를 적용
    //태그 선택
    var el2=$("li");
    $("li").css("background","pink");
    //배열중 특정번째만 적용
    $(el2[1]).css("color","red");//제이쿼리 객체로 만든다
    el2.eq(1).css("color","blue")//제이쿼리 메서드를 사용해서 선택
    $(el2).css("color","white")
    //제이쿼리의 반복문 each
    el2.each(function(a,b,c){
        // console.log(a,b,c)
        el2.eq(a).css("background","blue")
        $(b).css("color","white")
        // $(el2[3]).css("color","black")
    })
    var el3=$('.highlight');
    el3.eq(1).css({width:"500px", margin:"auto", background: "pink"})

})