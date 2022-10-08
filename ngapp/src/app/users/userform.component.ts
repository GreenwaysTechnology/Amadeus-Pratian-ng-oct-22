import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModel } from './user.model';
import { User } from './user.type';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styles: [
  ]
})
export class UserformComponent implements OnInit {
  user = new UserModel(100, "Default")
  //create CustomEvent Emitter Object
  @Output()
  onSendRequest = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    //broadcast data to the parent
    this.onSendRequest.emit(this.user)
    console.log(this.user)
    this.user = new UserModel(100, "Default")
  }

}
