'use strict';

//자바스크립트 내장 객체 콜백대용 비동기 함수
//1. state 상태 promise가 헤비한 연산을 수행중인지, 수행이 완료가 되어서 성공했는지 실패했는지 이해하기
//2. 기능 수행의 데이터 제공자, 클라이언트 차이점을 잘 이해해야한다

//-----------------------------------------------------------------------

//1. 클라이언트 입장에서 받을때
//promise를 생성했을때, executor가 자동적으로 실행 된다는 사실.
const promise = new Promise((resolve, reject) => {
  console.log('do some');
  setTimeout(()=>{
    // resolve('ellie') //성공
    reject(new Error('no network')) // 실패 =reject 일때 , 에러 오브젝트 객체
  },2000)
});

//2.데이터 제공자 then, catch, finally
promise.then((value)=>{ //then = 값이 정상 수행된다면 값을 받아올것이다
  console.log(value); //resolve 값인 'ellie'가 매개변수 value를 통해 들어온 것을 알 수 있따
})
.catch(error =>{
  console.log(error);
})
.finally(()=>{}) //성공실패 상관 없이 호출 

//3.promise 체이닝
const fetchNumber = new Promise((resolve,reject)=>{
  setTimeout(()=>
  resolve(1)
  ,1000);
});

fetchNumber // fetchNumber 함수의 resolve 1이 전달되어 1*2 => 2*3 =>
.then(num => num*2)
.then(num => num*3)
.then(num => { //then 은  위에처럼 값을 바로 전달해도 되고 또다른 비동기 promise를 불러와도 된다
  return new Promise((resolve, reject) => {
    setTimeout(()=>
    resolve(num-1)
    ,1000);
  })
})
.then(num =>console.log(num));

//-----------------------------------------------------------------------

const getHen = () => 
new Promise((resolve, reject)=>{
  setTimeout(()=>resolve('🐔'),1000);
});

const getEgg = hen => 
new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(`${hen}=>🥚`),1000);
});

/* const getEgg = hen => 
new Promise((resolve, reject)=>{
  setTimeout(()=>reject(new Error(`error! ${hen} =>🥚`)),1000);
});
 */

const cook = (egg) => 
new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(`${egg}=>🍳`),1000);
});

getHen()
.then(getEgg) // 한가지만 받아오는 경우 생략이 가능하다
/* .catch(error=>{
  return '🥖';
}) // 에러시 return으로 메워 주고 이어갈수도 있음 */
.then(cook)
.then(console.log)
//.catch(console.log); // getEgg가 reject, Error일때 cook으로 넘어가지 않고 catch로 오게됨
