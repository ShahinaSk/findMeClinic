import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TabbedPaneForRegComponent } from './tabbed-pane-for-reg/tabbed-pane-for-reg.component';
import { PatientregistrationComponent } from './patient-registration/patient-registration.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { PatientappointmentsComponent } from './patientappointments/patientappointments.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';

const dashboardRoutes: Routes = [
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(dashboardRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
