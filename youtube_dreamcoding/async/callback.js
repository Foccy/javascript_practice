'use strict';
//자바스크립트는 동기적이다
//호이스팅이 된 이후부터 하나하나씩 순차적으로 실행이된다

//동기 콜백
function printImmediately(print){
  print();
} // => 호이스팅으로 함수선언 맨위로 올라감

//비동기 콜백
function printWithDelay(print,timeout){
  setTimeout(print,timeout);
} // => 호이스팅으로 함수선언 맨위로 올라감


console.log('1'); //동기 1st
setTimeout( () => console.log('2'), 1000); // 1번후 브라우저에 일단 요청 후, 1초뒤 비동기 4st
console.log('3'); // 동기 2st
//settimeout함수는 브라우저 api로 브라우저에게 요청을 보낸다
//응답을 기다리지 않고 그다음으로 넘어가게 되어있음 1초가 지난후에 브라우저에서 실행
printImmediately(()=>console.log('hello')); //동기 3st
printWithDelay(()=>console.log('async callback'),2000); //3번후 브라우저에 일단 요청 후, 2초뒤 비동기 5st


//콜백지옥 예제

class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=>{
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id);
      }else{
        onError(new Error('not found'));
      }
    },2000 );
  }
  
  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'ellie'){
        onSuccess({name: 'ellie', role: 'admin'});
      }else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}