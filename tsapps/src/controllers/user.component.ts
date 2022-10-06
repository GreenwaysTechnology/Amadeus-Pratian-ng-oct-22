import { UserService } from "../services/user.service";


export class UserComponent {
    constructor(private userSerivce: UserService) { }
    init() {
        console.log(this.userSerivce.findAll())
    }
}