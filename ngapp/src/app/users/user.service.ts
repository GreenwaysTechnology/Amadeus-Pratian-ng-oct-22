import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { LoggerService } from "../util/logger.service";
import { User } from "./user.type";
import { USERS } from './users.mock';

@Injectable({
    providedIn: 'root' // Use root injector to create this instance...
})
export class UserService {
    url = 'http://localhost:3000'
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    constructor(private logger: LoggerService, private http: HttpClient) { }
    //api 
    public getUsers_(): Array<User> {
        this.logger.add("User Service: fetched Users ")
        return USERS
    }
    //
    public getUsers(): Observable<Array<User>> {
        //pipe method which is going to have list of rx  operators
        return this.http.get<User[]>(`${this.url}/users`).pipe(
            catchError(err => of([{ id: 0, name: 'default' }]))
        )
    }
    //save api
    public save(user: User): Observable<User> {
        console.log('inside save', user)
        return this.http.post<User>(`${this.url}/users`, user, this.httpOptions).pipe(
            catchError(err => of({ id: 0, name: 'default' }))
        )
    }

}