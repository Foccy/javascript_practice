const section = $("section");
const text = $(".txt");
const progressBar = $(".bar");
const windowHeight = $(window).height();
let scrollTop;

//퍼센트 계산
function getPercent(sct) {
	let scrollHeight = section.height();
	let scrollRealHeight = scrollHeight - windowHeight;
	let scrollPercent =(sct / scrollRealHeight) * 100;
	let textPercent = Math.floor((sct / scrollRealHeight) * 100);
	if (scrollPercent >= 100) {
		scrollPercent = 100;
	}
	render(scrollPercent,textPercent);
}

//화면에 출력
function render(scrollPercent,t) {
	text.text(t + "%");
	progressBar.css("width", scrollPercent + "%");
}

//스크롤 양 얻기
$(window).scroll(function () {
	scrollTop = $(this).scrollTop();
	getPercent(scrollTop);
});
