import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorregistrationService {

  _url = 'http://localhost:8082/api/v1/doctor';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private _http: HttpClient) { }


  saveDoctor(doctor: Doctor) {
    doctor.role="doctor";
    return this._http.post<Doctor>(this._url, doctor, this.httpOptions);
  }


}
