class Employee {
    //instance variables
    id: number = 0
    name: string = ''
    salary: number = 0.0

}

//let is keyword
//emp is reference variable which points the object location
//new is keyword
//Employee() - Constructor call.
let emp = new Employee()
emp.id = 100
emp.name = 'Subramanian'
emp.salary = 9000
console.log(`Id ${emp.id} Name ${emp.name} Salary ${emp.salary}`)