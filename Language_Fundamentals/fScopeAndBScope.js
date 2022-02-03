// //Variable Scope
let x=5;//Global Scope
function a(){
    let x=2 //Local Scope
    x+=5
    let y=1;//Local Scope we will try to excess it in functino b
    console.log(x)
}
function b(){
    console.log(x)
    console.log(y)

}
a()
b()


//What is hoisting in javascript
//A process which by which variable declarations are moved to the top

// What is Scope of a variable
// it is the availability of visibility or lifetime of a variable


