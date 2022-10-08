import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdetailComponent } from './customerdetail.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [

  { path: '', component: CustomersComponent },
  { path: ':id', component: CustomerdetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
