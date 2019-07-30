import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchDoctorService } from '../search-doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector: 'app-my-dialog',
 templateUrl: './my-dialog.component.html',
 styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
 result: any;
 constructor(private displayData:SearchDoctorService,
    private data: MatDialog,
    private route: ActivatedRoute,
    private router:Router) { }
 ngOnInit() {
 }
 close(){
   this.data.closeAll();
 }
 searchSpecialization(x) {
  //  TODO: calll that serive method here
//    this.displayData.getAllDoctorsBySpecialization(x);
  console.log(x," specialization in dialog box");
  this.displayData.getAllDoctorsBySpecializationAndArea(x);
   this.data.closeAll();

//  this.router.navigate(['/searchView'],
//  {queryParams: {specialization:x}
//  })

 }
}
