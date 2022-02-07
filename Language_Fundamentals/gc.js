// freeing memory location after ending a program is called garbage collection of GC
// [obj, variable, function] needs memory to store and in-between read and write operations happen after the end of program GC clears memory
// javascript is a high level language we do not need to allocate memory.
// Memory allocation & releasing happens automatically
// GC(Garbage collection) is called memory management with reference to javascript
// Mark-and-sweep algorithm clears un-referenced memory locations
// As long as references exist, there will not be any cleaning or garbage collection
//The algorithmm begins with the root element & then it starts marking the referenced values & unmarked values will be cleared.
let obj={
    name:"V8"
} 
console.log(obj)
obj=null //we are deleting the reference of name with obj
console.log(obj)