//prmitive data types 

//strings - "",'',``(back tick - interpolation , multi line strings)

//explcit type declaration: type is declared using :type
let firstName: string = "subramanian"
let lastName: string = 'Murugan'
//string concation
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
//es 6 string interpolation syntax
console.log(`Name ${firstName} ${lastName}`)
//backtick notation for multi line
let message = 'Hello'
let template = `
  <div>
    <h1>${message}</h1>
  </div>
`
console.log(template)

//implicit type declaration: type is declared without using :type
//type inference: the type of the variable is assigned based on values
let city = 'Coimbatore'
let state = 'Tamil Nadu'
console.log(city)
console.log(state)

//numbers - 
let salary: number = 100
let age = 18
console.log(`salary ${salary}`)
console.log(`age ${age}`)

//booleans
let isEnabled:boolean = true 
let isActive = false 
console.log(`isEnabled ${isEnabled}`)
console.log(`isActive ${isActive}`)





