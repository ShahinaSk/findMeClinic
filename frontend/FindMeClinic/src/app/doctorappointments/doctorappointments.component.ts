import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {  DoctorAppointmentsService} from '../doctor-appointments.service';
@Component({
 selector: 'app-doctorappointments',
   templateUrl: './doctorappointments.component.html',
   styleUrls: ['./doctorappointments.component.css']

})
export class DoctorappointmentsComponent implements OnInit {

 today: Date = new Date();
 previousAppointmentData: any;
 upcomingAppointmentData: any;
  constructor(private previousAppointments:DoctorAppointmentsService ,private upcomingAppointments:DoctorAppointmentsService) {

 }

 ngOnInit() {

      this.previousAppointments.getDoctorAppointmentDetails().subscribe((data:any) => {
         this.previousAppointmentData = data;
         console.log(this.previousAppointmentData);
          let previousRecordsData = this.previousAppointmentData.filter(data1 => new Date(data1.dateAndTime) < this.today);
          console.log(previousRecordsData);
          this.previousAppointmentData=previousRecordsData;
     });

     this.upcomingAppointments.getDoctorAppointmentDetails().subscribe((data:any) => {
       this.upcomingAppointmentData = data;
       let upcomingRecordsData = this.upcomingAppointmentData.filter(data1 => new Date(data1.dateAndTime) > this.today);
       console.log(upcomingRecordsData);
        this.upcomingAppointmentData=upcomingRecordsData;
       });
    }
  }