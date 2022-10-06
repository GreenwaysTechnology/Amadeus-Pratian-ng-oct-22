    class TodoService {
        constructor() {

        }
        //methods
        findAll(): string {
            return 'todos'
        }
        //arrow
        save = (todo:string) => {
            return 'save'
        }
    }

    let todoService = new TodoService()
    console.log(todoService.findAll())
    console.log(todoService.save('todo'))