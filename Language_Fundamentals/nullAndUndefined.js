//What is Undefined
//A Variable which is not assigned a value is "undefined"
let y;
let z=null
console.log(y)
console.log(y==z)//True Because Both null and undefined means empty value
console.log(y===z) //False Because null and undefined are of different types . Strict equality operator also checks data types Both undefined and null primitive data types(string,number,bigint,boolean,undefined,symbol and null)
const primitve=["string","number","bigint","boolean","undefined","symbol","null"]
console.log(`Primive Data are ${primitve.length} and are ${primitve}`)