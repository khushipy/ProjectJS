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
