//Array Operation
//unshift(arg) and push(arg) to add elements to the array at the beginning and the end of an array
// shift() and pop() to remove elements to the array at the beginning and the end of an array

// unshift(arg) and push(arg) both adds elements and returns lenght of an array
// const arr=["one","two","three"]
// const push=arr.push("four")//push=4 beacase after pushing to arr it returns array length
// console.log(`push returns: ${push} array: ${arr}`)


//pop() and shift() returns the element
// const pop=arr.pop()
// console.log(`Pop return: ${pop} array : ${arr}`)




//array.splice() method can add,insert,replace removing single or multiple elements
// syntax of splice()
// Array.splice( index, remove_count, item_lis
var languages = ['C++', 'Java', 'Html', 'Python', 'C'];

//General use of splice
// console.log(`
// \b original array: ${languages} \n 
// Modified Array: ${languages.splice(2,1,"JavaScript","PhP")} \n 
// After Operation: ${languages}
// `)

// implementing shift()
// console.log(`
// \b original array: ${languages} \n 
// Modified Array: ${languages.splice(0,1)} \n 
// After Operation: ${languages}
// `)

// implementing unshift()
//here  ${languages.splice(0,0,"php")} means index count will start from 0,we are not deleting any element again 0 but adding "php"
// console.log(`
// \b original array: ${languages} \n 
// Modified Array: ${languages.splice(0,0,"php")} \n
// After Operation: ${languages}
// `)

//implementing push(arg) with splice
// console.log(`
// \b original array: ${languages} \n 
// Modified Array: ${languages.splice(languages.length,0,"php")} \n
// After Operation: ${languages}
// `)

//Conclusion splice is method which changes(mutate) an array
//splice method returns deleted items if nothing deleted then it will return an empty array

// console.log(`
// \b original array: ${languages} \n 
// Modified Array: ${languages.splice(3,0,"php")} \n
// After Operation: ${languages}
// `)
