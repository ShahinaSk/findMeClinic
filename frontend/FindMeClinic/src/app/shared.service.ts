import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  doctorDetails = new BehaviorSubject<any>({});
  doctorDetail$ = this.doctorDetails.asObservable();

  send(data){
    this.doctorDetails.next(data);
  }  
}
