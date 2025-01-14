let score = "33"
let score1 = undefined
let score2 ="33abc"
let score3 = null
let score4 = true
let score5 = "Khushi"
// type conversion to number
let value = Number(score)
let value1 = Number(score3)
let value2 = Number(score4)
let value3 = Number(score3)
let value4 = Number(score4)
let value5 = Number(score5)


console.log(score,value);
console.log(typeof(score),typeof(value));

console.log(score1,value1);
console.log(typeof(score1),typeof(value1));

console.log(score2,value2);
console.log(typeof(score2),typeof(value2));

console.log(score3,value3);
console.log(typeof(score3),typeof(value3));

console.log(score4,value4);
console.log(typeof(score4),typeof(value4));

console.log(score5,value5);
console.log(typeof(score5),typeof(value5));

/* 33 33
string number
undefined 0
undefined number
33abc 1
string number
null 0
object number
true 1
boolean number
Khushi NaN
string number */

let islogged = 0
let booleanLogged = Boolean(islogged)

console.log(islogged, booleanLogged)
console.log(typeof islogged, typeof booleanLogged)
/* 1- whatever no = true
    0 - false
    "string" - true
    "" empty string = false*/

// ********operations*********

let Value = 3
let negValue = -value;
console.log(negValue)
// all basic arithematic maths is fine
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

console.log(+true)
console.log(+"")

let count = 100
count++;
console.log(count)
