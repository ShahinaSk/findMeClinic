import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Scheduler } from './scheduler';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };

  getSlots(emailId:String){
    return this.http.get("http://localhost:8086/api/v1/slots/"+emailId, this.httpOptions);
  }

  putSlots(emailId:string,key:string,value:number){
    return this.http.put("http://localhost:8086/api/v1/slots/"+emailId+"/"+key+"/"+value, this.httpOptions);
  }
}
