import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class SearchDoctorService {
location: any;

 constructor(private http: HttpClient) {  }
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
     // 'user-key': 'db933142c91d582345976098a6d7b451'
   })
 };

 filteredDoctors: any = new Subject();
 byAreaDoctors: any = new Subject();


//  getAllDoctors() {
//     return this.http.get('http://172.17.0.1:8082/api/v1/doctors', this.httpOptions);
//  }
 getAllDoctors(){
  console.log('this is in allDoctors service method');
    return this.http.get('http://172.17.0.1:8082/api/v1/doctors', this.httpOptions);
   
  }
  
 getAllDoctorsBySpecialization(specialization:string) {

   this.http.get('http://172.17.0.1:8082/api/v1/doctor/'+specialization).subscribe(data => {
     this.filteredDoctors.next(data)
   });
  
}

getAllDoctorsBySpecializationAndArea(specialization:string) {
  console.log("Is this getting called in specialization and area ??");
  let y=sessionStorage.getItem('key');
  // console.log(`http://172.17.0.1:8082/api/v1/doctor/${encodeURIComponent(y)}/${encodeURIComponent(specialization)}`);
  console.log(`http://172.17.0.1:8082/api/v1/doctor/${(y)}/${(specialization)}`);
  this.http.get('http://172.17.0.1:8082/api/v1/doctor/'+y+'/'+specialization, this.httpOptions).subscribe(data =>{
    this.byAreaDoctors.next(data);
  });
 console.log(this.byAreaDoctors,'in service');
}

getAllDoctorsByArea(area){
    
    console.log(area,'this is in byArea service method');
     return this.http.get('http://172.17.0.1:8082/api/v1/doctors/'+area, this.httpOptions);

     this.location=area;
     }
  


// searchSpecialization(value){
//   console.log('dentist is here'+value);
//   return this.http.get('http://172.17.0.1:8080/api/v1/doctor/specialization'+value, this.httpOptions);

// }

    }
