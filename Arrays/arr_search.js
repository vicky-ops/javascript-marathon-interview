// Searching items in an Array 
//Methods of searching in an array
// indexOf() arr.indexOf(search,index) return match index or -1
// lastIndexOf() return match index or -1
// includes() returns boolean

// indexOf(search,index)
// if there are more than one matches found , it will return the index of the first item found

// lastIndexOf(search,startIndex) by default startIndex=array.length-1 

const animals = ['Dodo', 'Tiger', 'Penguin','Tiger', 'Dodo','Penguin'];
// console.log(animals.length)//.length property of array return the array length in natural number count starts from 1 not 0
// console.log(animals.indexOf("Tiger")) //returns 1
// console.log(animals.indexOf("Human")) //returns -1
// console.log(animals.lastIndexOf('Penguin',animals.length-2))//returns 2
// console.log(animals.includes('tiger'))//returns false cause tiger==Tiger

//find method
// const findPenguin=animals.find((animal,index)=>{
//     return animal=="Penguin"
// })

// // findPenguin('Penguin')
// console.log(findPenguin)

// findIndex() returns the index value
// const findPenguin=animals.findIndex((animal,index)=>{
//     return animal=="Penguin"
// })

// // findPenguin('Penguin')
// console.log(findPenguin)


// filter elements
// const findPenguin=animals.filter((animal,index)=>{
//     return animal=="Penguin"
// })

// // findPenguin('Penguin')
// console.log(findPenguin) //returns [ 'Penguin', 'Penguin' ]


// difference between find() and filter() method
// find() method returns only one value i.e first match and stops searching
// filter method retuns new array for those matched condistions

// findIndex() will return -1 if there is no value

// indexOf() returns only theindex vs includes() returns boolean value "true" and "false"

// filter method can be used the get multiple match cases in search operation



