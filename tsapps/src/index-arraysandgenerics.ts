//Generics and arrays

//without type
let list = [1, "hello", true]
console.log(list)

//with type:syntax-1
let numList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numList)
//with type:syntax-2 : generics syntax
let numList2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//functions return array
function getList(): Array<number> {
    return [1, 2, 3, 4, 5, 6]
}
function getNumList(): number[] {
    return [1, 2, 3, 4, 5, 6]
}
//array of Employees
class Employee {
    id: number
    name: string
}

let employees: Array<Employee> = [{
    id: 1,
    name: 'a'
}]