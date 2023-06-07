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

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(user,userWithRole => 
      {alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`)}
    ,(error) => {console.log(error);})
  },
  error => {console.log(error);}
  );

  //UserStorage 객체 안에 저장된 user id,pw가 없을 경우 loginUser 함수가 헛도는 콜백지옥이 생긴다
  // 콜백 체인의 문제점은 가독성이 떨어져서 비즈니스 로직을 파악하기 힘듦 디버깅 유지보수 힘들어짐

  //promise() 콜백을 쓰지않고 비동기 코드를 처리할 수 있게 해주는 함수
  //정해진 장시간에 기능을 수행하고 나서 정상적으로 기능이 수행이 되어 졌다면 성공의 메시지와 함께 처리된 결과값 전달
  //예상 못한 문제가 발생할 시, 에러를 전달해 준다 