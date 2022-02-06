// Date and time Basics

//calling date object in various ways
// const dt=new Date()
// console.log(dt)
// console.log(new Date())

//2nd way of get getting date and time by setting arguments to new Date() object month can be avoided
// const dt=new Date(2022,1,7)
// console.log(dt)

//3d syntax new Date(milliseconds) started 1jan 1970
// const milliseconds=1.66e12
// console.log(new Date(dt.getTime()))


//4th way of setting date and time using string passing following ISO 8601 extended format 'YYYY-MM-DDTHH:mm:ssz'
// setTimeout(()=>{
// const dt=new Date("2022-02-06T13:55:00z")
// console.log(dt)},1000)


//Four Different ways to create date time
// new Date() newDate(y,m,d,h,m,s,m) new Date(milliseconds) new Date(string)

//What will be the output of the below code?
// const dt= new Date(2020,08,23)//08 should of August but as js month index start with 0 so August will be September
// console.log(dt)

//Explain various formats of ISO standard followed by javascript Date and time?
// Iso Standard is :-
// Year-'YYYY'
// Month-"MM"
// Date -"DD"

