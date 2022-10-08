import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Customer } from './customer.type';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styles: [
  ]
})
export class CustomerdetailComponent implements OnInit {
  id!: string
  customer!: Customer
  constructor(private route: ActivatedRoute, private customerService: CustomersService ,public location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        console.log(params['id'])
        this.id = params['id']
        this.customerService.getCustomer(+this.id).subscribe(customer => {
          this.customer = customer
        })
      }
    })
  }

}
