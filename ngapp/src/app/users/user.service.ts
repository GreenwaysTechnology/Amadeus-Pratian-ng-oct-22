import { Injectable } from "@angular/core";
import { LoggerService } from "../util/logger.service";
import { User } from "./user.type";
import { USERS } from './users.mock';

@Injectable({
    providedIn: 'root' // Use root injector to create this instance...
})
export class UserService {
    constructor(private logger: LoggerService) { }
    //api 
    public getUsers(): Array<User> {
        this.logger.add("User Service: fetched Users ")
        return USERS
    }
}