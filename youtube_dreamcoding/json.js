//json
//javascript object notation



//1.object to json (객체 => json)  JSON.stringfy


let json = JSON.stringify(true);
// console.log(json);

json = JSON.stringify(['apple','banana']);
// console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate : new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  }
}

json = JSON.stringify(rabbit);
// console.log(json);

json = JSON.stringify(rabbit, ['name','color']);
// console.log(json);

json = JSON.stringify(rabbit, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' :value;
});
// console.log(json);


//2.json to object (json => object) 
//parse(json)
console.clear();
json = JSON.stringify(rabbit);// json => 객
const obj = JSON.parse(json, (key,value)=>{
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
}) // 객 => json
console.log(obj);
rabbit.jump(); // rabbit을 json 변환시, jump함수는 전혀 포함되지않았다. 
//obj.jump(); 재변환했을때 당연히 없음

console.log(rabbit.birthDate.getDate()); 
console.log(obj.birthDate.getDate());