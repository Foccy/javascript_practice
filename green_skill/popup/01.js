/*
window.open("popup.html", "배너", "width=300,height=300,left=50,top=10");
*/

function expandingWindow(website) {
	let winWidth = window.screen.availWidth;
	let winHeight = window.screen.availHeight;
	let sizer = window.open("", "", "left=300,top=300,scrollbar=yes");
	for (let sizeWidth = 3; sizeWidth < winWidth; sizeWidth += 7) {
		sizer.resizeTo(sizeWidth, 5000);
	}
  sizer.location=website;
	//console.log(winWidth, winHeight);
	/* availHeight 작업표시줄 뺀 화면크기 
	console.log(`화면크기 알아내기
  window: 창크기 (주소창 포함여부)
  window.outerWidth: ${window.outerWidth} /
  window.innerWidth: ${window.innerWidth} /
  screen: 모니터크기(작업표시줄 포함여부)
  screen.width: ${screen.width} /
  screen.availWidth: ${screen.availWidth} /
  `);
  */
}
