import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
// import { UserService } from './user.service';



@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule
  ],
  exports: [UserlistComponent],
  //providers: [UserService]
})
export class UsersModule { }
