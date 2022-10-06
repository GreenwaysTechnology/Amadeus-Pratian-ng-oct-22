//decorator 
function Course(courseInfo: any) {
    return function (target:any) {
        //decorator logic
        Object.defineProperty(target.prototype, 'course', { value: courseInfo })
    }
}

//class
@Course({ courseName: 'Angular', duration: '40 hrs' })
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Subramanian') as any
console.log(`${student.name} is studying ${student.course.courseName} ${student.course.duration} `)