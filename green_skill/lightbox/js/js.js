document.addEventListener("DOMContentLoaded", () => {
  var button = document.querySelectorAll(".gallery a"),
    target = document.querySelector("#lightbox-overlay");
  targetImg = target.querySelector("img");

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      let data = this.querySelector("img").getAttribute("data-lightbox");
      targetImg.setAttribute("src", data);
      target.classList.add("visible");
    });
  }
  target.addEventListener("click", function () {
    this.classList.remove("visible");
  });
});

// let sixImgJs = document.querySelectorAll(".gallery a");
// let hiddenImgJs = document.querySelector("#lightbox-overlay");
// let targetImgJs = hiddenImgJs.target("img");

// sixImgJs.addEventListener("click", function () {
//   let clickingJs = this.nextElementSibling.getElementsByTagName("img").getAttribute("data-lightbox");
//   hiddenImgJs.classList.add("visible");
//   targetImgJs = getElementsByTagName("src", clickingJs);
// });
// hiddenImgJs.addEventListener("click", function () {
//   let clickingJs2 = this.nextElementSibling.getElementsByTagName("img").getAttribute("data-lightbox");
//   hiddenImgJs.classList.remove("visible");
//   targetImgJs = getElementsByTagName("src", clickingJs2);
// });
