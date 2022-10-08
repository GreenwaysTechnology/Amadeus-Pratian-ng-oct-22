import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { UsersdetailsComponent } from './usersdetails.component';
import { UserformComponent } from './userform.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
// import { UserService } from './user.service';



@NgModule({
  declarations: [UserlistComponent, UsersdetailsComponent, UserformComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  exports: [UserlistComponent, UsersdetailsComponent, UserformComponent],
  //providers: [UserService]
})
export class UsersModule { }
