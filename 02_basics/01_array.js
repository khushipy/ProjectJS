const myArr =[0,1,2,3,4,5]
const names =["java","python","Javascript"]
const arr = new Array(1,3,4,5);
arr.push(4)
arr.pop()
arr.unshift(9) // add as first elment
arr.shift() //remove the first 
console.log(arr.includes(2)) // false boolean
console.log(arr.indexOf(1))
const newArray = arr.join()
console.log(arr, newArray)
console.log(typeof newArray) // thus join array is string
// slice, splice
console.log("A ", arr)
const n = arr.slice(1,3)
console.log(n)
console.log("B ",arr)
const m = arr.splice(1,3)
console.log(arr) // hehe splice removes the other elements
console.log(m) 
// part 2 ----
const num = [1,2,3,4]
const num2 = [2,3,6,5]
let num3 = num.concat(num2)
console.log(num3) // merges the two arrays
num.push(num2)
console.log(num) // push makes array in array
let num4 = [...num,...num2,...num3] // to merge any no. of arrays
console.log(num4)
let another_array = [1,2,3,[20,45,67,[300,466,222,111]],33,412,45,56]
const real_array = another_array.flat(Infinity)
console.log(real_array)
console.log(Array.isArray("Javascript"))
console.log(Array.from("Javascript"));
console.log(Array.from({name: "Js"})); //explain more
let a = 23, b=33,c=78;
console.log(Array.of(a,b,c));


