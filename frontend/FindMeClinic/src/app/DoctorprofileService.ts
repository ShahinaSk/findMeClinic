import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
export class DoctorprofileService {
saveDoctor(doctor: import("./doctor").Doctor) {
  throw new Error("Method not implemented.");
}
constructor(private http: HttpClient) { }
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
// getAllDoctors() {
//   return this.http.get('http://localhost:3000/doctors', this.httpOptions);
// }
getDoctorDetails(emailId:String){
  return this.http.get("http://localhost:8082/api/v1/doctors1/"+emailId,this.httpOptions);
 }
//  updatePatientDetails(doctor:Doctor){
//   doctor.role="doctor";
//   return this.http.put<Doctor>("http://localhost:8080/api/v1/patient",patient,this.httpOptions);
//  }
}