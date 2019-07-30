import { Component, OnInit } from '@angular/core';
import { PatientdashboardService } from '../patientdashboard.service';

@Component({
  selector: 'app-patientappointments',
  templateUrl: './patientappointments.component.html',
  styleUrls: ['./patientappointments.component.css']
})
export class PatientappointmentsComponent implements OnInit {

  myAppointmentData: any;

 today: Date = new Date();
 myAppointmentData1: any;
 previousAppointmentData: any;
 upcomingAppointmentData: any;
 upcomingRecordsData: any;
 constructor(private previousAppointments:PatientdashboardService,private upcomingAppointments:PatientdashboardService) { }

 ngOnInit() {
   this.previousAppointments.getAllAppointments().subscribe((data:any) => {
     this.previousAppointmentData = data;
     console.log(this.previousAppointmentData);
      let previousRecordsData = this.previousAppointmentData.filter(data1 => new Date(data1.dateAndTime) < this.today);
      console.log(previousRecordsData);
      this.previousAppointmentData=previousRecordsData;
 });

 this.upcomingAppointments.getAllAppointments().subscribe((data:any) => {
   this.upcomingAppointmentData = data;
   let upcomingRecordsData = this.upcomingAppointmentData.filter(data1 => new Date(data1.dateAndTime) > this.today);
   console.log(upcomingRecordsData);
    this.upcomingAppointmentData=upcomingRecordsData;
   });
}
  }

