import './style.css';
import img from './img.css';
import dog from './dog.js';
import pet from './pet.js';

const minji =new Image();
minji.src=img;
document.body.appendChild(minji);
alert("반갑습니다");
console.log("dd");
document.querySelector("#root").
innerHTML=`INDEX ${dog} ${pet}`

