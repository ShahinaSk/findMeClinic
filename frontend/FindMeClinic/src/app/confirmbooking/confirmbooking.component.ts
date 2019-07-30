import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../Patient';
import { BookAppointment } from '../bookappointment';
import { Doctor } from '../doctor';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.css']
})

export class ConfirmbookingComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    name: string;
    clinicName:string;
    emailId:string;
    address1:string;
    area:string;
    appointmentDate:Date;
    slot:string;
    id:string;
    doctor=new Doctor();
    address: any = {}
    patient=new Patient();
    bookAppointment=new BookAppointment();
   

    constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private appointment:AppointmentService) {
        this.route.queryParams.subscribe(params => {
            this.name = params["name"];
            this.clinicName = params["clinicName"];
            this.emailId = params["emailId"];
            this.address1 = params["address"];
            this.area = params["area"];
            this.appointmentDate=params["appointmentDate"];
            this.slot=params["slot"];
        });
     }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            date: ['', Validators.required],
            phone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
            gender: ['', Validators.required],
            email: ['',[Validators.required, Validators.email]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // window.alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        window.alert("....!! Booking Confirmed !!....")
    }

    register(firstname,phone,email,date)
    {
       this.patient.name=firstname;
       this.patient.phone=phone;
       this.patient.emailId=email;
       this.patient.dateOfBirth=date;
       this.doctor.name=this.name;
       this.doctor.clinicName=this.clinicName;
       this.doctor.emailId=this.emailId;
       this.address.address=this.address1;
       this.address.area=this.area;
       this.doctor.address = this.address;
       this.bookAppointment.patient=this.patient;
       this.bookAppointment.doctor=this.doctor;
       //this.bookAppointment.appointmentDate=this.appointmentDate;
       this.bookAppointment.slot=this.slot;
       this.bookAppointment.appointmentId="12";
       console.log(this.bookAppointment);
       return this.appointment.saveAppointment(this.bookAppointment).subscribe(data =>{
        console.log(data);
         }
       );
    }
}
