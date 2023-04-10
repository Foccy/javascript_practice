const section = document.querySelector("section");
const text = document.querySelector(".progress .txt"); //퍼센트값을 담을 엘리먼트
const progressBar = document.querySelector(".progress .bar"); //퍼센트 게이지 엘리먼트
const windowHeight = window.innerHeight;
let scrollTop;

window.addEventListener("scroll", function () {
  scrollTop = window.scrollY;
  //1. scrollHeight=문서의 높이
  //2. scrollRealHeight = scrollHeight-windowHeight
  //3. scrollPercent=(부분/전체)*100
  //4. scrollAmount=Math.floor(3)자리수버림
  console.log()

})