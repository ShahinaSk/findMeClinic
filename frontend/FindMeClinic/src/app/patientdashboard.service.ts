import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './Patient';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class PatientdashboardService {


  emailId:String;
  doctor=new Doctor();
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };

getAllAppointments() {
  return this.http.get('http://localhost:3000/patientAppointmentDetails', this.httpOptions);
}

getPatientDetails(emailId:String){
    
  return this.http.get("http://localhost:8080/api/v1/patients/"+emailId,this.httpOptions);
}

getDoctorDetails(emailId:String){
    
  return this.http.get("http://localhost:8082/api/v1/doctors1/"+emailId,this.httpOptions);
}

updatePatientDetails(patient:Patient){
  patient.role="patient";
  return this.http.put<Patient>("http://localhost:8080/api/v1/patient",patient,this.httpOptions);
}
}