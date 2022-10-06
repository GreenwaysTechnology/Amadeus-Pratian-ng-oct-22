//functions :
function sayHello() {
    console.log('hello')
}
sayHello()

//function args and parameters
function sayHai(name: string) {
    console.log(`Hai ${name}`)
}
sayHai("Subramanian")
// sayHai(100)

//type inference with function parameters
function doStuff(message) {
    console.log(message)
}
doStuff(100)
doStuff("hello")
doStuff(true)

//what if i miss parameters
//default args
function add(a: number = 0, b: number = 0) {
    let c = a + b
    console.log(c)
}
add(10, 10)
add()

//what if i miss parameters
//optional args
function multiply(a?: number, b?: number) {
    let c = a * b
    console.log(c)
}
multiply(10, 10)
multiply()
//optional vs defalult
/**
 * optional args are initized with undefined
 * default args are intialized with some value
 * optionals may cause runtime errors ,where as default args not
 */
