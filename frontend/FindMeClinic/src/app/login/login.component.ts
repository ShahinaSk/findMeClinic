import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { AuthenticationService } from '../authentication.service';
import * as jwt_decode from "jwt-decode";
import { PatientregistrationComponent } from '../patient-registration/patient-registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authentication:AuthenticationService) { }

  user:User=new User();
  userDetails:any;
  details:any;

  ngOnInit() {
  }
  sendRole(){

    this.router.navigateByUrl('/patientregistration');
  }
  sendRole1(doctor:string){
    this.router.navigateByUrl('/doctorregistration');
  }

  authenticate(username,password)
  {
    this.user.emailId=username;
    this.user.password=password;

    console.log(this.user);

    this.authentication.saveUser(this.user).subscribe(data =>{
      // alert("Valid")
      this.userDetails=data;
      //var obj = JSON.parse(this.userDetails);
      console.log(this.userDetails["token"]);
      this.details=this.getDecodedAccessToken(this.userDetails["token"]);
      if(this.details.aud=="patient")
      {
        this.router.navigateByUrl('/patientdashboard/'+username);
      }
      if(this.details.aud=="doctor")
      {
        this.router.navigateByUrl('/doctordashboard/'+username);
      }
    },
      
      error =>{
        //alert("invalid Credentials")
        console.log("Error",error);
      }
    );
  }
  getDecodedAccessToken(token: string){
    try{
        console.log(jwt_decode(token));
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


}
