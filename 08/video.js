$(function () {
	/* 
    1.변수에 저장할것들
      화면사이즈(window width,heigth),비디오사이즈(video  width,heigth)
    2.함수로 만들것들
      비디오풀사이즈 videoResizeFn
  */
	var winW = $(window).innerWidth(),
		winH = $(window).innerHeight(),
		vidW = $("#main-video").innerWidth(),
		vidH = $("#main-video").innerHeight();
    //setInterval(videoResizeFn,100)
    /*
     $(window).resize(function(){
     윈도우 크기변경시 실행
    }) 
    */
    $(window).resize(function(){
      videoResizeFn();
    })
	function videoResizeFn() {
    winW= $(window).innerWidth();
    winH=$(window).innerHeight(),
    vidW=$("#main-video").innerWidth(),
    vidH=$("#main-video").innerWidth(),
    console.log(`winW=${winW}winH=${winH}vidW=${vidW}vidH=${vidH}`);
		//1. 비디오박스 높이=창높이
		$(".main-video").css({ width: "100%", height: winH });
		//2. 창높이가 비디오높이보다 길때
		if (winH > vidH) {
			//대상선택 , 해당함수 작성
			$("#main-video").css({ height: winH, width: "auto" });
		}
		//3. 창너비가 비디오너비보다 넓을때
		if (winW > vidW) {
			$("#main-video").css({ width: winW, height: "auto" });
		}
		//4. 정렬
		$("#main-video").css({ marginLeft: (winW - vidW) / 2+"px", marginTop: (winH - vidH) / 2 +"px"});
    console.log(winH - vidH / 2);
	}
}); //jQuery
