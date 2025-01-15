const name = "Khushi"
const rep = 39
//console.log(name + rep + "Value") out dated way 
// better way to concatenate 

console.log(`Hello my name is ${name} and rep is ${rep}`);

const gameName = new String('KhushiPal')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('O'));

const newString = gameName.substring(0, 4)
console.log(newString) // can't use -ve values
// can give -ve values in slice only!!!
const a = gameName.slice(-8, 4)
console.log(a)
const b = "  Khus hi  "
console.log(b)
console.log(b.trim());

const url = "https://khushi.com/khushipal%20yeaah"
console.log(url.replace('%20', '-'))
console.log(url.includes('khu'))

let abe =  new String('khushi-pal-com-java-javascript')
console.log(abe.split('-'))
