//promise 위에 조금더 간편한 api를 제공
//promise를 더 깔끔하게 사용할 수 있게 해준다

//1. async

/* function fetchUser(){
  return new Promise((resolve,reject)=>{
    //10초에 한번 요청 
    resolve('ellie');
  });
} */

// 이렇게 복잡한걸 async를 함수앞에 붙여주면 그냥 함수자체를 fetch처럼 바로 넣어준다

async function fetchUser(){
    //10초에 한번 요청 
    return 'ellie';
}

//async 넣어주어서 코드블록 자동으로 promise로 바뀜

const user = fetchUser();
user.then(console.log)
console.log(user);

//----------------------------------------------------------

//2. await
//async가 붙은 함수 안에서만 사용할 수 있다, await 앞의 함수를 기다려 주었다가 본디 함수를 실행해 주겠다는 의미

function delay(ms){
  return new Promise (resolve => setTimeout(resolve,ms))
}

async function getApple (){
  await delay(1000); //promise 다음 
  return '🍎';
}

async function getBanana (){
  await delay(1000);
  return '🍌';
}

/* function pickFruits() {
  return getApple()
  .then(apple =>{
    return getBanana()
    .then(banana =>`${apple} + ${banana}`);
  });
} */

async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
  }

pickFruits().then(console.log);

//---------------------------------------------------------------
//3.useful Promise API
function pickAllFruits(){
  return Promise.all([getApple(),getBanana()])
  .then(fruits => fruits.join('+')
  );
}
pickAllFruits().then(console.log)

function pickOnlyOne(){
  return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then(console.log)