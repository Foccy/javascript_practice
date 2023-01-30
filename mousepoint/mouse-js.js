const cursor = document.querySelector("#cursor");
const cStyle = window.getComputedStyle(cursor);

window.addEventListener("mousemove", function (event) {
  let cSize = [cStyle.width.split("px", "1"), cStyle.height.split("px", "1")];
  let pointer = event;
  let pP = [pointer.clientX, pointer.clientY];
  
  let pObj = {
    x: pointer.clientX/2 + "px",
    y: pointer.clientY/3 + "px"
  }
 
  cursor.style.marginLeft = -(cSize[0] / 2) + 'px';
  cursor.style.marginTop = -(cSize[1] / 2) + 'px';
  
  cursor.style.left = pP[0] + 'px'; 
  cursor.style.top = pP[1] + 'px';  

  const m1 = document.querySelector("#m1");
  const m2 = document.querySelector("#m2");
  const m3 = document.querySelector("#m3");

  m1.style.top = pObj.y
  m1.style.left = pObj.x


})