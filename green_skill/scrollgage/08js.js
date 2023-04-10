const section = document.querySelector("section");
const text = document.querySelector(".txt");
const progressBar = document.querySelector(".bar");
const windowHeight = window.innerHeight;
let scrollTop;

//진행율 계산 함수
function getPercent(scrollTop){
	let scrollHeight = section.clientHeight;
	let scrollRealHeight = scrollHeight - windowHeight;
	let scrollPercent = Math.floor((scrollTop / scrollRealHeight) * 100);
	if (scrollPercent >= 100) {
		scrollPercent = 100;
	}
	render(scrollPercent)
}

//화면출력 함수
function render(scrollPercent){
	text.textContent = scrollPercent + "%";
	progressBar.style.width = scrollPercent + "%";
}

//스크롤이벤트 함수
window.addEventListener("scroll", function () {
	scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
	getPercent(scrollTop)

});
