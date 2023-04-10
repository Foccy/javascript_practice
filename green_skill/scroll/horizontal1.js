const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    //scrollLeft 요소의 수평 스크롤 바 위치를 반환 , e.deltaY 스크롤방향을 반환 (우측:100,좌측:-100)
    //scrollContainer의 수평 스크롤 바 위치에 스크롤 방향을 합하여 가로스크롤양이 가산되며 이동한다.
    let amt = scrollContainer.scrollLeft += e.deltaY;
});