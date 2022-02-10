//Array.Prototype.reduce()
//reduce((previousValue, currentValue) => { /* ... */ } )


// finding the average
// const arr=[2,4,6,8]
// console.log(arr.reduce((accumulator,current,index,array)=>{
//     accumulator += current
//     if(index===array.length-1){
//         return accumulator/array.length
//     }
//     return accumulator
// },0))

//flaten and array
let arr=[
    [45,90],
    [5,6],
    [2,4]
];
//Array.reduce to flatten an 2d array to 1d array

// const flatArr=arr.reduce((accumulator,currentArray)=>{
//     return accumulator.concat(currentArray)
// },[])
// console.log(flatArr)

// get the sum of the salary key 
const employees=[
    {eNo:1001,salary:30000},
    {eNo:1002,salary:22000},
    {eNo:1003,salary:34000},
    {eNo:1004,salary:60000},
]

const totalSalary=employees.reduce((salaryAccu,current)=>salaryAccu+=current.salary,0)
console.log(totalSalary)