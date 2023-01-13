let gnbLiA = $(".gnb>li>a");
let aH = $(".sub>li>a").outerHeight();
gnbLiA.click(function () {
	let tg = $(this);
	//tg 옆의 하위 a의 총 길이얻어옴
	let subA = tg.next().find("a").length;
	$(".sub").css("height", "0px");
	tg.next().css("height", aH * subA + "px");
});
