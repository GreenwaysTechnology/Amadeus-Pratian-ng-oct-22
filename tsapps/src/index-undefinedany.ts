//undefined: if variable is declared but not initalized


//if variable is declared with no type , it is considered undefined later if you assgin any value, the type is not going to be the same type in future assigments, it looks like js 
//which is not recommened
let salary;
console.log(salary)
salary = 100
console.log(salary)
salary = "hello"
console.log(salary)

//if you dont know the type in advance, can we declare with undefined?
//No : 
 //use always any type.
 let myvar:any 
 console.log(myvar)
 myvar = 100
 console.log(myvar)
 myvar = "hello"
 console.log(myvar)