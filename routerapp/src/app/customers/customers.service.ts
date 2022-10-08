import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Customer } from "./customer.type";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = 'http://localhost:3000'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Array<Customer>> {
    //pipe method which is going to have list of rx  operators
    return this.http.get<Customer[]>(`${this.url}/customers`).pipe(
      catchError(err => of([{ id: 0, name: 'default' }]))
    )
  }
  public getCustomer(id: number): Observable<Customer> {
    //pipe method which is going to have list of rx  operators
    return this.http.get<Customer>(`${this.url}/customers/${id}`).pipe(
      catchError(err => of({ id: 0, name: 'default' }))
    )
  }

}
