/* form, input 사용자가 입력하는 곳 */
const form = document.querySelector('form')
const input = document.querySelector('input')

/* ul li 사용자가 입력한 정보가 저장되는 곳 */
const ul = document.querySelector('ul')

form.addEventListener('submit', ((event)=>{
    
    event.preventDefault() //새로고침 방지해주는 메소드



    /* 사용자가 아무것도 입력하지 않았을때! 아무것도 추가하지않게하기위해 if 문 을 추가해준다! */
    if(input.value !== ''){
    //console.log(input.value); /* =>> form submit마다 새로고침되어서 볼수가 없음.. */
    
    const li = document.createElement('li') /* 1. li태그를 만들어줌 */
    li.innerText = input.value;/*2. input태그안 입력요소를 li에 텍스트로 반영해줌 */
    ul.appendChild(li); /* 3. ul 자식요소로 붙여줌 */

    /* input 입력하고 난뒤에 빈칸으로 내용을 다시 추가해야되므로 초기화 */
    input.value = '';
    }
}))