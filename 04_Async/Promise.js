const fs = require('fs');

// My Async function using promise Cleaner way 

function myAsync(){
    console.log("Inside ReadFile")
    return new Promise(function(resolve){
        console.log("Inside Promise")
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("Before Resolve")
            resolve(data);
        });
    });
}

// callback function to call
function OnDone(data){
    console.log(data)
}
console.log(myAsync());
var a = myAsync();
a.then(OnDone);