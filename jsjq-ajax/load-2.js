addEventListener("DOMContentLoaded", () => {
  let home1 = document.querySelector("#home1");
  let home2 = document.querySelector("#home2");
  //데이터파일의 경로를 변수에 할당
  const homeUrl = "./home.html";
  let requstdata = new XMLHttpRequest();
  //서버에 요청하는 프로그램 노출 (get<>post x , 주소)
  requstdata.open("GET", homeUrl);
  requstdata.onload = () => {
    let responsedata = requstdata.response;
    let ids = responsedata.querySelectorAll("[id]");
    home1.innerHTML = ids[0].innerText;
    home2.innerHTML = ids[1].innerText;
  };
  request.send();
});
