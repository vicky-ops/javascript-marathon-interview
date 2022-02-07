//Iterables and iterators
// let arr=[2.3,6,3]
// for (let i of arr){
//     console.log(i)
// }

//Iterate through a object literal with Symbol.iterator
let itr=arr[Symbol.iterator]();
console.log(itr)
console.log(itr.next())
// itr.next()
// itr.next()

