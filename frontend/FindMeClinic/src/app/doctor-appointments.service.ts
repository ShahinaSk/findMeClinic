import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentsService {
  constructor(private http: HttpClient) {  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  getDoctorAppointmentDetails(){
    return this.http.get('http://localhost:3000/doctorAppointmentDetails', this.httpOptions);
  }




  }

