/* 1 : 스크롤양 확인  */
const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  let scrollTop;
  const h2 = document.querySelector("h2");
  window.addEventListener("scroll", function () {
    // scrollTop = window.pageYOffset;
    // scrollTop = document.documentElement.scrollTop;
    scrollTop = window.scrollY;
    animate(scrollTop);
  });

  /* array.forEach(콜백함수) */
  const animate = (sct) => {
    sections.forEach((el) => {
      let sectionTop = el.offsetTop;
      // console.log(el.offsetTop);
      if (sct > sectionTop - gap) {
        // console.log("섹션의탑", sectionTop);
        // console.log("스크롤탑", sct);
        el.classList.add("sectionIn");
      }
    });
  };
}
js();
