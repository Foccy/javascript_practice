const form = document.querySelector('form')

const calculate = (weight, height) => { /* bmi 계산함수 12*/
    const put = weight *10000 / (height * height).toFixed(1)
    return Math.floor(put)
}
const display = (bmi) =>{
    const result = document.querySelector('.result')
    let group;

    if (bmi >= 30.0){
        group = '중등도 비만'
    }else if ( bmi>= 25.0){
        group = '경도 비만'
    }else if ( bmi >=23.0){
        group = '과체중'
    }else if ( bmi >=18.5){
        group = '정상'
    }else {
        group ='저체중'
    }

    result.innerText = `${bmi} -> ${group}`
}
const formHandler = (event) =>{
    event.preventDefault()
    /* 사용자가 빈값을 제출했을때, 1.input:require */

    const heightInput = document.querySelector('#height') /* 1. input을 담은 값 */
    const weightInput = document.querySelector('#weight')

    if(heightInput !== '' && weightInput !==''){ /* 2. 빈값이 아닐시 */
        const height = heightInput.value /* 3. value 값을 다시 할당 */
        const weight = weightInput.value
        const bmi = calculate(weight,height) /* 4. bmi 계산함수에서 계산된 결과값을 담을 변수 */
        display(bmi)/* 5. result값을 나타내줄 함수 */

        heightInput.value='' /* 6.빈 값이 됨 */
        weightInput.value=''
    }
}

form.addEventListener('submit',formHandler)