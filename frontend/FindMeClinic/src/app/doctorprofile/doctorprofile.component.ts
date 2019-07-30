import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { DoctorprofileService } from 'src/app/DoctorprofileService';

@Component({
 selector: 'app-doctorprofile',
 templateUrl: './doctorprofile.component.html',
 styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
 title = 'MyDoctors';
 doctor: any = null;
 doctorData = new Doctor();
 address: any = {};
 constructor(private share: DoctorprofileService, private router: Router,
             private doctorProfile: DoctorprofileService, private route1: ActivatedRoute) {
 }
 ngOnInit() {
   this.doctorPro();
 }
 doctorPro() {
   const emailId = this.route1.snapshot.paramMap.get('email');
   console.log("profile " + emailId);
   this.doctorProfile.getDoctorDetails(emailId).subscribe((data: any) => {
     // console.log(data);
     this.doctorData.name = data.name;
     this.doctorData.emailId = data.emailId;
     this.doctorData.gender = data.gender;
     this.doctorData.medicalLicense = data.medicalLicense;
     this.doctorData.practiceStartedDate = data.practiceStartedDate.substring(0, 10);
     this.doctorData.specialization = data.specialization;
     this.doctorData.clinicName = data.clinicName;
     console.log(data.clinicName);
     this.address.state = data.address.state;
     this.address.city = data.address.city;
     this.address.state = data.address.state;
     this.address.area = data.address.area;
     this.address.pinCode = data.address.pinCode;
     this.doctorData.address = this.address;
     // console.log(this.doctorData);
   });
 }
 editDoctorProfile() {
   const name = this.doctorData.name;
   const gender = this.doctorData.gender;
   const emailId = this.doctorData.emailId;
   const medicalLicense = this.doctorData.medicalLicense;
   const specialization = this.doctorData.specialization;
   const practiceStartedDate = this.doctorData.practiceStartedDate;
   const address = this.doctorData.address;
   const clinicName = this.doctorData.clinicName;
   const profileImage = this.doctorData.profileImage;
   const state =this.address.state;
   const city= this.address.city;
   //this.address.area = data.address.area;
   const pincode=this.address.pinCode;
   this.doctorData.address = this.address;
   // console.log(this.doctorData);
   this.router.navigateByUrl('/editDoctor/' + name + '/' + emailId + '/' + specialization + '/' + gender);
 }
}