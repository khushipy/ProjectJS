// let is best to use 
let age = 82
let islogged = false
let state; // undefined
// number - 2 to power 53
// bigint
// string 
// boolean - true / false
// null - standalone value
// symbol = unique 


// object 

console.log(typeof "khushi")
console.log(typeof null) // object 
console.log(typeof undefined) // umdefined

//primitive 
// 7 types : String, Number, Boolean, null, Undefined, Symbols, BigInt
const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId ); // false
const bigNum = 123456345n; // bigint
console.log(typeof bigNum)
let myObj = {
    name: "Khushi",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction) // function

/* Undefined = undefined
   Null = Object
   Boolean = Boolean 
   Number = number 
   String = string
   object = object 
   object = function
*/

let blah = ["blah","blahhh","blahhh"]
console.log(typeof blah)
console.log(blah)
// ------------------------------------
// stack (primitve)-> copy, Heap (non - primitive)-> reference (original) 
// primitive - name "DOesn't changes the original as it gives the copy"
let name1 = "pyhton"
let name2 = name1;
name2 = "Java"
console.log(name1,name2)

// non primitive - user "changes the detail in the original user also cause they refer to the same address and not a copy"
let user1 = {
    email: "user1@yeh",
    age: 23,
}
let user2 = user1;
user2.email = "user2@yeh";
console.log(user1.email,user2.email)


