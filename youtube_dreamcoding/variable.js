//2.Variable
//let (added in Es6)
let globalName= 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(hello);
console.log(globalName);
}
console.log(name);
console.log(globalName);


// ** var **

//var (dont ever use this)
//var hoisting (move declaration from bottom to top)
//has no block scope
{
console.log(age);
age=4;
console.log(age);
var age
}
console.log(age); //===> block 밖에서도 가능 hoisting 

// **constant **
//favor immutable data type always for a few reason:
//- security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7; 
const maxNumber = 5;

// **Variable type
// primitive, single item : number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

const count =17 ; //integer
const size = 18.2; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values : infinity, -infinity, Nan
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan'
const greeting = 'hello' +brendan
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value : ${helloBob}, type: ${typeof helloBob}`);
console.log(`value : ` + helloBob +  `type:` + typeof helloBob);

//boolean
//false: 0, null , undefined , NaN, ''
//true : any other value
const canRead = true;
const test = 3<1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type : ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type : ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1===symbol2);
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1===gSymbol2);// true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text= 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' +5;
console.log(`value: ${text}, type: ${typeof text}`);