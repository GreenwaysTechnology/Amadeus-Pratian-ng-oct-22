import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.type';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersdetailsComponent implements OnInit {

  @Input()
  // users!: Array<User>
  users!: Observable<Array<User>>
  //selected user
  selectedUser!: User

  @Output()
  onSendRequest = new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
  }
  //Listener method
  onSelect(user: User) {
    console.log(user)
    this.selectedUser = user
  }
  getUser(user: User) {
    this.onSendRequest.emit(user)
  }

}
