// array declaration
// // let arr=new Array()
// let arr=[3,4,7]//same data type
// let arr1=["Hi",1,true] //mix of data type
// console.log(`\b ${arr} \n ${arr1}`)
// //arr.length
// console.log(arr.length)
// // accessing array element with arr[index]
// console.log(arr1[arr1.length-1])
// reverse an array
// let arr3=[1,2,3,4,5]
// let reverseArr3=new Array()
// for(let num of arr3){
//     reverseArr3.push(arr3[arr3.length-num])
// }
// console.log(`${arr3} : ${reverseArr3}`)

//Creating an array of object literal
// const products=[
//     {pCode:1,pName:"apple"},
//     {pCode:2,pName:"mango"},
//     {pCode:3,pName:"pineapple"}
// ]
// //getting the whole array
// console.log(products)
// //getting the individual product
// console.log(products[0])
// // getting the individual product name
// console.log(products[1].pName)


//Traversal
let arr4=["ES5","ES6","ES7","ES8"]
//for of loop
// for (let es of arr4){
//     console.log(es)
// }
// //Old for loop
// for(let i=0;i<arr4.length;i++){
//     console.log(arr4[i])
// }
//for in loop which loop though index not value
// for(let esIndex in arr4){
//     console.log(`Index: ${esIndex} value: ${arr4[esIndex]}`)
// }
//forEach method which taken callback function with element and the index
// arr4.forEach((currentValue,index,arr)=>{
//     console.log(index,currentValue,arr)
//     // if(index==2){
//     //     break
//     // }
// })

// difference between for in and for of
// for ..in will display the index number & for ..of will refer the elements/values

//forEach cann't be broken or say break out of it(illegal break statement), its going to loop till the entire array


// const arr=[1,2,3]
// console.log(arr[arr.length])//undefined because arr[3]=undefined

