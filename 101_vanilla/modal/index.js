/* 버튼, 모달창을 먼저 불러오자 */
const openBtn = document.querySelector('.open')
const container = document.querySelector('.container')

/* 클릭시 실행 */
openBtn.addEventListener('click', () => {
    container.style.display='flex';
    openBtn.style.display='none' ;
})