// curring is supported by many programming laguages
// it's a unique wat to call inner functions where you can pass word arguments partially or pass multiple arguments in function but in a function but 1 argument at a time

//Function Declaration with multiple argument in function
// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,4))


//Curring way of passing arguments partially with function expression with closure in effect
// const sum=(a)=>(b)=>(c)=>a+b+c
// // const cl=sum(4);
// // const ans=cl(3)
// const ans=sum(4)(2)(3)//sum(4) parent function and (2) child function lexical environment
// console.log(ans)


// Price calculation using currying partial execution
const priceCalc=price=>pDicount=>price*pDicount;

//get price
const priceAmount=300
const discountPrice=priceCalc(priceAmount)

console.log(`\n\t Original Price : ${priceAmount} 
             discount Price : ${discountPrice(.7)}
             Payable amount : ${priceAmount-discountPrice(.7)}`)


//multiplication=a=>b=c>a*b*c === const multiplcation=a>{
//     return b=>{
//         return c=>{
//             return a+b+c
//         }
//     }
// }

//Explain practical usage of function curring.
// Currying is an incredibly useful techique of functional programming which solves various purposes like passing partial parameters or avoiding unwanted repetitions like we tried with product price where price was passed only once


