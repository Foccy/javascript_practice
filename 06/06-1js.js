//원뎁스 A를 변수 gnbLiA 할당
let gnbLiA = $(".gnb>li>a");
//border,padding
let aH = $(".sub>li>a").outerHeight() - 4;


gnbLiA.click(function () {
  //클릭된 요소를 변수 tg에 저장
  let tg=$(this);
  //tg 다음요소의 하위에서 a 태그의 길이를 변수 subA에 저장
  let subA=tg.next().find("a").length
  //.sub 의 높이 0
  $('.sub').css("height", "0px");
  //tg 다음요소의 높이를 변수 aH*subA 로 변경
  tg.next().css("height", aH * subA + "px");

	//토글로 만들기
	//if 는 (true)
	function toggle() {
    //javascript  .hasClass("on")=>classList.contains('on')
		if (!$(this).next().hasClass("on")) {
			$(".sub").removeClass("on");
			$(this).next().addClass("on");
		} else {
			$(this).next().removeClass("on");
		}
	}
});
