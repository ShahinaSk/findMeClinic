import { Component, OnInit ,Input} from '@angular/core';
import { Patient } from '../Patient';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientdashboardService } from '../patientdashboard.service';
import { PatientRegistrationService } from '../patient-registration.service';


@Component({
 selector: 'app-patientregistration',
 templateUrl: './patient-registration.component.html',
 styleUrls: ['./patient-registration.component.css']
})
export class PatientregistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  status=false;
  gender="";

 patient:Patient=new Patient();
  patientData: any;
 constructor(private registration:PatientRegistrationService,private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
  private patientEditProfile:PatientdashboardService,private router:Router) { }

 ngOnInit() {
  this.validation();
 
 
 }
 

 validation()
 {
  this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    date: ['', Validators.required],
    phone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    gender: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    
}, );
 }
 

 register(patientname,phone,email,date,password)
 {
   console.log(this.gender);
   this.patient.name=patientname;
   this.patient.phone=phone;
   this.patient.emailId=email;
   this.patient.dateOfBirth=date;
   this.patient.password=password;
   this.patient.gender=this.gender;

   console.log(this.patient);

 }
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    this.findInvalidControls();
 //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
findInvalidControls() {
  console.log("hii");
  const invalid = [];
  const controls = this.registerForm.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
          invalid.push(name);
      }
  }
  console.log(invalid);
  if(invalid.length==0)
  {
    return this.registration.savePatient(this.patient).subscribe(data =>{
      console.log(data);
      this.router.navigateByUrl('/login');
       }
     );
  }
  else
  {
    return;
  }
}
}
