import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json'
    })
  }


  saveUser(user:User){

    return this.http.post<User>("http://localhost:8081/api/v1/user",user,this.httpOptions);
  }
}
