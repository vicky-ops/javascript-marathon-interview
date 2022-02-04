//Rest and Spread Operator
//ES6 Feature

//Rest Operator
//Rest Operator it has to be the last parameter eg:-(...nums,a,b) will not work but (a,b,...nums) will work
//Rest operator is part of ES6 in ES5 we have a array like object called arguments but it does not work with arrow function.

// function sum(...nums){
//     let result=0;
//     for(const num of nums){
//         // console.log(num)
//         result+=num
//     }
//     return result
// }
// let result=sum(1,2)
// let result2=sum(1,2,3,4,5,6,7)
// console.log(result)
// console.log(result2)




//Spread Operator
// let arr1=[1,2,3,4,5]
// let arr2=[...arr1,5,6,7]
// console.log(arr2)

//Find max value
// let findMax=[4,78,90,34,453]
// console.log(Math.max(...findMax))


//Can we use argument object in arrow function?
//-->It can't be used , but with more traditional way it can work.

//Which is the best way to create new arrays with assignments?
//using spread operator eg. arr2=[...arr,5,6,7]

//Create a function which can handle n number of parameter?
//using rest operator eg. function sum(...nums){}

//can the rest operator be placed anywhere in the parameter list?
//No rest parameter needs to be placed as the last parameter ie rest of the end parameter can rest in ...rest parameter