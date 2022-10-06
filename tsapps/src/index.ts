import { UserComponent } from "./controllers/user.component";
import { UserService } from "./services/user.service";

function main(){
    let ctrl = new UserComponent(new UserService())
    ctrl.init()
}
main()