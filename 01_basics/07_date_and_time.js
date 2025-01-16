// Date
let myDate = new Date() //object
console.log(myDate.toDateString()) //Thu Jan 16 2025
console.log(myDate.toISOString()) //2025-01-16T10:05:02.116Z
console.log(myDate.toJSON()) //2025-01-16T10:05:02.116Z
console.log(myDate.toLocaleDateString()) //1/16/2025
console.log(myDate.toLocaleString()) //1/16/2025, 10:05:02 AM

let myCreatedDate = new Date(2023, 0, 23) // year month[0,1,2,3,...] day
console.log(myCreatedDate)
let date1 = new Date("2025-01-16")
console.log(date1.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(date1.getTime());
console.log(Math.round(Date.now()/1000))
console.log(date1.getDate());
console.log(date1.getDay())

console.log(date1.toLocaleString('default', {
    weekday : "long",
    timeZone : "Asia/Kolkata"
}))
