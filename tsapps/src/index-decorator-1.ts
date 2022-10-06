//decorator 
function Course(target: any) {
    //decorator logic
    Object.defineProperty(target.prototype, 'course', { value: 'Typescript' })
}

//class
@Course
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Subramanian') as any
console.log(`${student.name} is studying ${student.course} `)