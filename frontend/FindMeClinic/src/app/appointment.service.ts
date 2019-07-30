import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookAppointment } from './bookappointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json'
    })
  }
 
    saveAppointment(bookAppointment:BookAppointment){
      
      return this.http.post<BookAppointment>("http://localhost:8084/api/v1/appointment",bookAppointment,this.httpOptions);
    }
}
