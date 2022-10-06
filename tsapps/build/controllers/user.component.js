export class UserComponent {
    constructor(userSerivce) {
        this.userSerivce = userSerivce;
    }
    init() {
        console.log(this.userSerivce.findAll());
    }
}
