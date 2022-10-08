import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.type';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers$!:Observable<Customer[]>
  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers()
  }

}
