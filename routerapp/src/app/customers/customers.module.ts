import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerdetailComponent } from './customerdetail.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerdetailComponent
  ],
  imports: [
    CommonModule,HttpClientModule,
    CustomersRoutingModule
  ],
  exports: [
    CustomerdetailComponent
  ]
})
export class CustomersModule { }
