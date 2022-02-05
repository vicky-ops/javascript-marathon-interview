//Arrow functions
//Three functional behaviour which does not work with arrow function

//this object doesn't work with arrow functions
//arguments object doesn't  work with arrow functions
// we cann't use new to call arrow function

//tradional function
// function func(){
//     //statements
// }
// //function expression
// const func=function(){
//     //statement
// }
// //Arrow function
// const func=()=>{

// }
//for arrow function parenthesis is not required for single parameter, return can be ommited if single line statement

// IIFE
// (()=>{//Arrow funtion
//     console.log("IIFE")
// })();

//This doen't work with Arrow function
// const test=function(){//Top level function on call this return global object
//     console.log(this)
// }
// test()

//function on obj
// const obj={
//     // test(){
//     //     console.log(this)//This works and returns the object itself
//     // }
//     test:()=>{
//         console.log(this)//This return global object
//     }
// }
// obj.test()

//Arguments object doesn't work with arrow function
// function test(){
//     console.log(arguments)
// }
// test(1,2,4,5)

// const test=(...num)=>{ //As argument object doesnot work with arrow functions we have to work with ...rest operator
//     console.log(num)
// }
// test(1,2,3,4)

//Arrow functions doesn't work with call functions because we have classes to handle such situations


//We already have classes keyword to deal with the classes
//We do not need the function to act as a class