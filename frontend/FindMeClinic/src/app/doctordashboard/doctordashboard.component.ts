import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
 selector: 'app-doctordashboard',
 templateUrl: './doctordashboard.component.html',
 styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {
 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
 .pipe(
   map(result => result.matches)
 );
 route: ActivatedRoute;
constructor(private breakpointObserver: BreakpointObserver,private router:Router,private route1:ActivatedRoute) {}
openTimings(){
 this.router.navigate(['openTimings'],{relativeTo:this.route});
}
openProfile(){
   const email= this.route1.snapshot.paramMap.get('username');
   console.log(email);
   this.router.navigate(['openProfile/'+email],{relativeTo:this.route});
}
openAppointments(){
 this.router.navigate(['openAppointments'],{relativeTo:this.route});
}
ngOnInit()
{
}
}