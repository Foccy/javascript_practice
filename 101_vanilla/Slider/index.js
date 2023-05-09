const images = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

/* item 클래스가 들어간 모든 요소, prev,next 버튼 */

let index=0;
let lastIndex = images.length - 1; //3, 0, 1, 2

// 1.


//5.
/* queryAll로 배열 형태로 가져온 images를 forEach로 */
/* classList를 이용해서 show클래스를 삭제,추가해줌 */
const updateImage = () =>{
    images.forEach((img)=>{
        img.classList.remove('show')
    });
    images[index].classList.add('show')
}


//3.
const moveToPrev = () => {
    if(index === 0 ){
        index = lastIndex;
    }else{
        index--;
    }

    updateImage();
}

//4.
const moveToNext = () => {
    if(index === lastIndex){
        index=0;
    }else{
        index++;
    }

    updateImage();
}


//2.
prevButton.addEventListener('click', moveToPrev)
nextButton.addEventListener('click', moveToNext)