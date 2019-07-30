import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Doctor } from '../doctor';
import { DoctorregistrationService } from '../doctorregistration.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-doctorregistration',
templateUrl: './doctorregistration.component.html',
styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {
emailPattern =   "[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}";
pincodePattern= "[0-9]{6}";
firstFormGroup: FormGroup;
thirdFormGroup: FormGroup;
doctor = new Doctor();
address: any = {}
hide= true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  route: ActivatedRoute;
constructor(private _formBuilder: FormBuilder,
  private doctors: DoctorregistrationService,private breakpointObserver: BreakpointObserver,private router:Router
) { }
goToLogin(){
this.router.navigate(['openLogin'],{relativeTo:this.route});
}
ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
    NameCtrl: ['', Validators.required],
    GenderCtrl: ['', Validators.required],
    QualificationCtrl: ['', Validators.required],
    MedicalLicenseCtrl: ['', Validators.required],
    PracticeStartedDateCtrl: ['', Validators.required],
    EmailCtrl: ['',Validators.pattern(this.emailPattern)],
    PasswordCtrl: ['', Validators.required],
    ProfilePhotoCtrl: ['', Validators.required],
  });
  this.thirdFormGroup = this._formBuilder.group({
    ClinicNameCtrl: ['', Validators.required],
    MobileCtrl:['', Validators.required],
    StateCtrl: ['', Validators.required],
    CityCtrl: ['', Validators.required],
    FlatNoCtrl: ['', Validators.required],
    AreaCtrl: ['', Validators.required],
    PincodeCtrl: ['',Validators.pattern(this.pincodePattern)]
  });
}
saveDoctor() {
  this.doctor.name = this.firstFormGroup.controls.NameCtrl.value;
  this.doctor.gender = this.firstFormGroup.controls.GenderCtrl.value;
  this.doctor.emailId = this.firstFormGroup.controls.EmailCtrl.value;
  this.doctor.practiceStartedDate = this.firstFormGroup.controls.PracticeStartedDateCtrl.value;
  this.doctor.qualification = this.firstFormGroup.controls.QualificationCtrl.value;
  this.doctor.medicalLicense = this.firstFormGroup.controls.MedicalLicenseCtrl.value;
  this.doctor.password = this.firstFormGroup.controls.PasswordCtrl.value;
  this.doctor.profileImage = this.firstFormGroup.controls.ProfilePhotoCtrl.value;
}
onValChange(something) {
  this.doctor.specialization = something;
}
saveClinic() {
  this.address.state = this.thirdFormGroup.controls.StateCtrl.value;
  this.address.mobile = this.thirdFormGroup.controls.MobileCtrl.value;
  this.address.city = this.thirdFormGroup.controls.CityCtrl.value;
  this.address.address = this.thirdFormGroup.controls.FlatNoCtrl.value;
  this.address.area = this.thirdFormGroup.controls.AreaCtrl.value;
  this.address.pinCode = this.thirdFormGroup.controls.PincodeCtrl.value;
  this.doctor.address = this.address;
  return this.doctors.saveDoctor(this.doctor).subscribe(data => {
    console.log(data);
  });
}
}
