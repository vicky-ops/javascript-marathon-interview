// Array.Prototype.map() method
// map() takes a callback function it receives (elem,index,array) and returns a new array it doesn't mutates the original
// const array1 = [1, 4, 9, 16];
// array1.map(function(num,index){
//     console.log(`Index: ${index} Element: ${num}`)
// })
// console.log(array1.map(elem=> {return elem*elem} ))

// find length of each array element
// const arr2=['apple','banana','oranges']
// const arr2Length=arr2.map((elem)=> elem.length )//return is implict if statement a single line
// console.log(arr2Length)

//Find the squareroot of element
// const arr=[25,16,144,36]
// const sqrt=arr.map(elem=>Math.sqrt(elem))
// console.log(sqrt)

//return pName  from products arry
const products=[
    {pCode:1,pName:"Apple"},
    {pCode:2,pName:"banana"},
    {pCode:3,pName:"oranges"}
]
const pName=products.map(elem=>elem.pName)
console.log(pName)
