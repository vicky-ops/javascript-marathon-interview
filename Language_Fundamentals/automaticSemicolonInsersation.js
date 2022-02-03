//Automatic Semicolon Insertion (ASI)
//Writting a ; at the end of line is optional, Js added a semicolor at the end of a line-break
// console.log("Hello")//Semicolor is added by ASi
// console.log("World");

//Js doesn't add semicolor at the end of every line
// let product=5* //as it is line break but js understand the operand needs number to complete the calculation
// 2
// console.log(product)



function test(){
    return //on line 22 it return undefined cause ASI puts a ";" on line 14 after return which returning empty 
    {
        a:5
    }
}

const obj=test();

console.log( obj)//It returns undefined