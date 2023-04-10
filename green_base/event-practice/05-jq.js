const textZone = $("#textZone");
const btn1 = $("#btn1");
btn1.click(function () {
	textZone.css("color", "blue");
});

const btn2 = $("#btn2");
//method channing
btn2
	.mouseover(function () {
		textZone.css("color", "yellow");
	})
	.focus(function () {
		textZone.css("color", "yellow");
	});
//두개이상의 이벤트연결 (이벤트 바운딩)
const btn3 = $("#btn3");
/*
btn3.mouseover(function(){
  textZone.css("color", "green");
  textZone.css("background-color", "red");
})
btn3.focus(function(){
  textZone.css("color", "green");
  textZone.css("background-color", "red");
})
*/
/* 다른이벤트에 같은 실행문 적용
btn3.on("mouseover focus ", function () {
	textZone.css("color", "green");
	textZone.css("background-color", "red");
});
*/
//이벤트도 다르고 실행문도 다름
btn3.on({
	"mouseover focus ": function () {
		textZone.css("color", "green");
		textZone.css("background-color", "red");
	},
	click: function () {
		alert("click");
		textZone.css("margin-left", "80px");
	},
});
$("#listWrap").hover(
	function () {
		$(".list1").css("display", "block");
		$(this).css("background", "red");
	},
	function () {
		$(".list1").css("display", "none");
		$(this).css("background", "blue");
	}
);
