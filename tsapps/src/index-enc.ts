class  Employee{
    public id:number 
    private password:string 
    constructor(id:number,password:string){
        this.id = id 
        this.password = password
    }
    //public methods
    public calculate(){
        return 10
    }
    private generatePassword(){
        return `Password is ${Math.random()}`
    }
}
let emp = new Employee(1,'password')
console.log(emp.id)
// console.log(emp.password)
console.log(emp.calculate())
//console.log(emp.generatePassword())

