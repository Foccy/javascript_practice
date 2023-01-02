// $("선택자")
// const h1 = document.querySelector("h1"); //
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.onclick = function () {
//   h1.style.backgroundColor = "green";
// };
// heading.style.color = "red";
// // $("선택자").css({"color","red","background-color":'yellow"})

//====================================================

//조건문
var your_sex = "남자";
document.write("당신은" + your_sex + "이므로");
//if(조건){조건이 참일때 실행}
if (your_sex == "남자") {
  document.write("반바지를 입으세요.");
}
if (your_sex == "여자") {
  document.write("긴바지를 입으세요.");
}
// 현재 시간이 18시 이전이면 해를 출력하고 18시 이후면 달을 출력
let current = new Date();
let day_time = current.getHours() + 7;
if (day_time < 18) {
  document.write(
    `<img src="../images/day.gif" style="display:block; margin:0 auto">`
  );
}
if (day_time >= 18) {
  document.write(
    `<img src="../images/night.gif" style="display:block; margin:0 auto">`
  );
}
