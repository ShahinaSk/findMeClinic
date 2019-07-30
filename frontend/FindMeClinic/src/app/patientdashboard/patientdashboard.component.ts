import { Component, OnInit } from '@angular/core';
import { ObservableLike, Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-patientdashboard',
 templateUrl: './patientdashboard.component.html',
 styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {

 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
 .pipe(
   map(result => result.matches)
 );
 route: ActivatedRoute;

constructor(private breakpointObserver: BreakpointObserver,private router:Router,private route1:ActivatedRoute) {}

 ngOnInit() {
 }
 patientAppointments(){
   this.router.navigate(['myAppointments'],{relativeTo:this.route});
 }
 patientProfile(){
  const email= this.route1.snapshot.paramMap.get('username');
  console.log(email);
  this.router.navigate(['patientProfile/'+email],{relativeTo:this.route}); }


}