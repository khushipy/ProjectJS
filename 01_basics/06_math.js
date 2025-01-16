const score = 100
console.log(score)
const balance = new Number(100)
console.log(balance) // here this will specify its number

console.log(balance.toString()) // type is string
console.log(balance.toFixed(2)); // 100.00

const other = 123.4
console.log(other.toPrecision(3));// jitna number doge utne digit tak precise(round off) karega

const hund = 100000
console.log(hund.toLocaleString('en-IN'));
// ------------Maths-----------

console.log(Math.abs(-23));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.round(Math.random()*10));
const min = 10, max =20;
console.log(Math.floor(Math.random() * (max - min + 1)))









