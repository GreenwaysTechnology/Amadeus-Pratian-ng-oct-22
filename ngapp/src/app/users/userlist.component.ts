import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  users$!: Observable<Array<User>>

  constructor(private userService: UserService, public logger: LoggerService) { }

  ngOnInit(): void {
    //here we need to call services 
    //this.users = this.userService.getUsers()
    this.userService.getUsers().subscribe({
      next: (users: Array<User>) => {
        this.users = users;
      }
    })
    this.users$ = this.userService.getUsers()
  }
  getUser(user: User) {
    //send data to the service
    this.userService.save(user)
  }


}
