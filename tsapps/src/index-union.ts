//union type: a variable can hold many types or constant values

let id: number | string
id = 100;
id = "abc100"
//id =true //error

//union type allows specifivalues
let gender: "Male" | "Female" | "Third"

gender = "Male"
//gender ="others"

let ticketStatus: 0 | 1

function Mode(varient: "dark" | "light") {
    console.log(varient)
}
Mode("dark")
Mode("light")

function Person(gender: "Male" | "Female" | "Third" | undefined, active: true | false) {
    console.log(gender, active)
}
Person("Female", true)
Person("Male", false)

