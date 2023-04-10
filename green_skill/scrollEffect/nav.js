/* 3단계 스크롤양이 gap보다 크면 nav에 sticky */
const gap = 500;
function js() {
  const sections = document.querySelectorAll("section"); //화면단위 움직일 섹션
  const nav = document.querySelector("nav"); //
  const gnb = nav.querySelectorAll(".gnb>li");

  let scrollTop;
  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY;
    animate(scrollTop);
  });

  const animate = (sct) => {
    //sections
    sections.forEach((el) => {
      let sectionTop = el.offsetTop;
      if (sct > sectionTop - gap) {
        el.classList.add("sectionIn");
      }
    });
    //sticky-nav
    sct >= gap ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    // if (sct >= gap) {
    //   nav.classList.add("sticky");
    // } else {
    //   nav.classList.remove("sticky");
    // }
  };

  //gnb 클릭하면 해당 섹션으로 부드럽게 이동
  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(el.firstChild.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
      gnb.forEach((obj) => {
        obj.classList.remove("on");
      });
      el.classList.add("on");
    });
  });
}
js();
