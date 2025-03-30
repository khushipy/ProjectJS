function getLength(str){
    console.log("Original String", str)
    console.log("Length:", str.length);
}
getLength("Hello World");

function findIndexOf(str, target){
    console.log("original String:", str);
    console.log("Index:", str.lastIndexOf(target));
}
findIndexOf("Hello World World", "Hello");

console.log(parseInt("42"))
console.log(parseInt("453pscdjc")) // if gibershish in the end it doesnt matter 
console.log(parseInt("kjjd213")) // NaN
console.log(parseInt("3.14")) // 3

const intialArray  = [1,2,4,3];
console.log(intialArray);
intialArray.push(9)
intialArray.shift()
console.log(intialArray);
intialArray.unshift(9);
console.log(intialArray);