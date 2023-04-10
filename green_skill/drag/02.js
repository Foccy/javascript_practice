//이미지를 움직이는 함수
function movingImg(e, objToMove) {
	objToMove.style.left = e.clientX - objToMove.width / 2 + "px";
	objToMove.style.top = e.clientY - objToMove.width / 2 + "px";
}

//윈도우로드 실행 함수
window.onload = function () {
	const sample = document.getElementById("sample");
	sample.onmousedown = function () {
		var self = this;
		sample.onmousemove = function (e) {
			movingImg(e, self);
		};
	};

	sample.onmouseup = function () {
		sample.onmousemove = null;
	};
	sample.ondragstart = function (e) {
		e.preventDefault();
	};
};
