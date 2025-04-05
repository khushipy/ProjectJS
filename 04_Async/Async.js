const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})//Async Functions

console.log("HI There>>")
let a = 0;
for (let i = 0; i< 1000000; i++){
    a++;
}
console.log(a);
console.log("Hii there 2");