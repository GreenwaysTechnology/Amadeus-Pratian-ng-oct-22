class Employee {
    //instance variables
    id: number
    name: string
    salary: number
    constructor(id: number = 0, name: string = '', salary: number = 0.0) {
        this.id = id 
        this.name = name 
        this.salary = salary
    }

}

//let is keyword
//emp is reference variable which points the object location
//new is keyword
//Employee() - Constructor call.
let emp = new Employee(12,'Subramanian',234.90)

console.log(`Id ${emp.id} Name ${emp.name} Salary ${emp.salary}`)