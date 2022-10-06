// class Employee {
//     //instance variables
//     id: number
//     name: string
//     status: boolean
//     //here constructor args are called local variables
//     constructor(id: number = 0, name: string = '', status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.status = status
//     }
// }

//remove variables declaration inside class 
//constructor local variables(args) can be converted into instance variable by adding either public or private
// class Employee {
//    //here constructor args are called local variables
//     constructor(public id: number = 0, public  name: string = '', public status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.status = status
//     }
// }


//remove variables declaration inside class 
//constructor local variables(args) can be converted into instance variable by adding either public or private
//inside constructor itself we can remove

class Employee {
    //here constructor args are called local variables
    constructor(public id: number = 0, public name: string = '', public status: boolean = false) { }
}
let emp = new Employee(12, 'murugan', true)
console.log(emp)
