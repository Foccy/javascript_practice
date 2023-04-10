addEventListener("DOMContentLoaded", () => {
  //load.html에 요소를 담을 변수를 초기화
  var news1 = document.querySelector("#newsWrap_1");
  var news2 = document.querySelector("#newsWrap_2");
  //기본 url설정
  const url = "./01-new.html";
  //ajax작업을 위한 xmlhttprequest()객체를 생성해서 request 변수에 할당
  let request = new XMLHttpRequest();
  //ex) 서버에 요청 --> 전화걸기(=url)
  //open(방법 get, url, 동기or 비동기 >>> 3가지 받음)
  request.open("GET", url);
  //응답할 데이터 형식(document -> html,xml)
  request.responseType = "document";
  request.onload = () => {
    //responseXML: 전달받을 데이터를 XML DOM 객체로 반환
    let response = request.response;
    console.log(response);
    //let doc = request.response;
    //반환받은 요소중 id 속성을 모두 변수ids에 저장
    let ids = response.querySelectorAll("[id]");
    console.log(ids);
    let outer = "";
    //outer+=ids[0].textContent;

    news1.innerHTML = ids[0].innerText;
    news2.innerHTML = ids[1].innerText;
  };
  //전화걸기버튼누름
  request.send();
});
