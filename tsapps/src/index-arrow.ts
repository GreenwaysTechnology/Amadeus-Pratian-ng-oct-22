//function literals

//hello is just variable holding function value

let hello = function (name: string = '') {
    console.log(`hello ${name}`)
}
//variable can be used to invoke function
hello('Subramanian')
//arrow functions: es 6 /ts syntax of declaring function.
hello = (name: string = '') => {
    console.log(`hello ${name}`)
}
hello('Subramanian')
//having single line of body,we can omit {}
hello = (name: string = ''): void => console.log(`hello ${name}`)
hello('Subramanian')

let add = (a: number = 0, b: number = 0): number => {
    return a + b
}
console.log(add(10, 10))
//function having return statement only,remove {} and return statement

add = (a: number = 0, b: number = 0): number => a + b
console.log(add(10, 10))