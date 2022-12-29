$(function () {
	const visual = $("#brandVisual>ul>li");
	const button = $("#brandVisual>ul>li");
	let current = 0; //현재
	let id; //setIntervalId
	const speed = 3000;
	//버튼클릭함수
	button.click(function () {});

	//시간마다실행
	timer();
	function timer() {
		setInterval(function () {
			let next = current + 1;
      
			if (next == visual.length-1) {
				next = 0;
			}
			move(next);
			//console.log(current++)
		}, speed);
	}

	//이동시키는 함수
	function move(next) {
		console.log("next" + next);
		let cu = visual.eq(current);
    let ne= visual.eq(next)
		cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.stop().animate({ left: "0%" });
	}
}); //jQuery

/*
document.addEventListener("DOMContentLoaded", function () {
	const visual = document.querySelectorAll("#brandVisual>ul>li");
	visual.style.backgroundColor = "white";
});
*/
