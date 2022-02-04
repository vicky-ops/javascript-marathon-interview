//NaN
//Nan is is global property representing Not - a - Number, we get this when there is non numeric value or operation performed

//when do we get NaN as output


let a=5;
let b="7"//b="value"

// console.log(a*b)//NaN because is not a Number

// //IsNaN() is function to test wheather a value is NaN or not returns boolean

// console.log(isNaN(a*b))


// //Validation of NaN
// if(!isNaN(a*b)){
//     console.log("Expression is Number")
// }
// //NaN is global property 
//NaN property returns new NaN every time we call it



//isFinite() can used to check passed argument is NaN and infinity
// console.log(isFinite(a*b))
// console.log(isFinite(5*5))
// console.log(isFinite(Number.MAX_VALUE*3))
// console.log(isFinite(Infinity))

//What will be the out-out of 
// console.log(NaN==NaN)//false because NaN is different every time

//What is the difference between 
// isNan() and isFinite() method
// isNan() return boolean value on passed argument is NaN or not
// isFinite() returns boolean value. where the is checks for both NaN and infinity

