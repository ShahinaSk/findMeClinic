import { Component, OnInit ,Input} from '@angular/core';
import { Patient } from '../Patient';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientdashboardService } from '../patientdashboard.service';
import { PatientRegistrationService } from '../patient-registration.service';

@Component({
  selector: 'app-patient-edit-profile',
  templateUrl: './patient-edit-profile.component.html',
  styleUrls: ['./patient-edit-profile.component.css']
})
export class PatientEditProfileComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  status=false;
  gender="";

 patient:Patient=new Patient();


 patient1=new Patient();
  patientData: any;
  saveData: Patient;
 constructor(private registration:PatientRegistrationService,private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
  private patientEditProfile:PatientdashboardService,private route1:ActivatedRoute,private router:Router) { }

 ngOnInit() {
  const name=this.route1.snapshot.paramMap.get('name');
  const emailId=this.route1.snapshot.paramMap.get('emailId');
  const dateOfBirth=this.route1.snapshot.paramMap.get('dateOfBirth');
  const gender=this.route1.snapshot.paramMap.get('gender');
  const phone=this.route1.snapshot.paramMap.get('phone');
  console.log(name+emailId+gender);

  

  this.registerForm = this.formBuilder.group({
    firstName: [name, Validators.required],
    date: [dateOfBirth, Validators.required],
    phone: [phone,[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    gender: [gender, Validators.required],
    email: [emailId,[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    
}, );
 }
 

 save(patientname,phone,email,date,password)
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
    
    console.log(this.patient);
    return this.patientEditProfile.updatePatientDetails(this.patient).subscribe(data =>{
      console.log(data);
      const email=data.emailId;
        this.router.navigateByUrl('/patientProfile/'+email);
       }
     );
  }
  else
  {
    return;
  }
}
}
