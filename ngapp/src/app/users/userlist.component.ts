import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../util/logger.service';
import { UserService } from './user.service';
import { User } from './user.type';
///import { USERS } from './users.mock';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styles: [
  ]
})
export class UserlistComponent implements OnInit {

  //users:Array<User> = USERS
  users!: Array<User>
  //Dependency Injection
  constructor(private userService: UserService,public logger:LoggerService) { }

  ngOnInit(): void {
    //here we need to call services 
    this.users = this.userService.getUsers()
  }

}
