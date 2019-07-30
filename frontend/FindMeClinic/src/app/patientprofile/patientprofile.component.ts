import { Component, OnInit } from '@angular/core';
import { PatientdashboardService } from '../patientdashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {

  patientData=new Patient();
  constructor(private myProfile:PatientdashboardService,private router:Router,private route1:ActivatedRoute) { }
 
  ngOnInit() {
    this.patientPro();
     
   }
 
 patientPro(){
   const emailId=this.route1.snapshot.paramMap.get('email');
   console.log("profile " +emailId);
   this.myProfile.getPatientDetails(emailId).subscribe((data: any) => {
 
     this.patientData.name = data.name;
     this.patientData.emailId=data.emailId;
     this.patientData.dateOfBirth=data.dateOfBirth.substring(0,10);
     this.patientData.gender=data.gender;
     this.patientData.phone=data.phone;
     
 
   });
 }
 editPatientProfile(){
 
   const name=this.patientData.name;
   const emailId=this.patientData.emailId;
   const dateOfBirth=this.patientData.dateOfBirth;
   const gender=this.patientData.gender;
   const phone=this.patientData.phone;
   
 
    this.router.navigateByUrl('/editPatient/'+name+'/'+emailId+'/'+dateOfBirth+'/'+gender+'/'+phone);
 }
 
}
