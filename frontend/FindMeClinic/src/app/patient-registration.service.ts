import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientRegistrationService {

  constructor(private http:HttpClient) { }
 httpOptions={
   headers:new HttpHeaders({
     'Content-type':'application/json'
   })
 }

   savePatient(patient:Patient){
     patient.role="patient";
     return this.http.post<Patient>("http://localhost:8080/api/v1/patient",patient,this.httpOptions);
   }
}
