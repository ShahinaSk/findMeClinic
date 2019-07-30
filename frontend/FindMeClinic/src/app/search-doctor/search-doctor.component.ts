import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { SearchDoctorService} from '../search-doctor.service';
import { SharedService } from '../shared.service';
import { Router,NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Doctor } from '../doctor';
import { PatientdashboardService } from '../patientdashboard.service';
import { SchedulerService } from '../scheduler.service';


@Component({
 selector: 'app-search-doctor',
 templateUrl: './search-doctor.component.html',
 styleUrls: ['./search-doctor.component.css']
})

export class SearchDoctorComponent implements OnInit {
 
 
  title = 'MyDoctors';
 doctors = [];
 special:any;
 x:any;
  doctor =new Doctor();
  address: any = {};
  slotData:any;
   slotData1:any;

 constructor(private doctorservice: SearchDoctorService,
             private share:SharedService,
             public dialog: MatDialog,
             private router:Router,
             private route: ActivatedRoute,
             private myprofile:PatientdashboardService,
             private schedulerService:SchedulerService
             ) {

 }

 ngOnInit() {
   const dialogRef = this.dialog.open(MyDialogComponent, {
     width: '650px',
     height: '300px'
   });
 
  const location=this.route.snapshot.queryParams;
   console.log(this.route.snapshot.queryParams);

console.log('area ',location.area);

sessionStorage.setItem('key', location.area);
// this.sessions.set(key, location);
// console.log(this.sessions.get(key) ,' session storage is working');
// console.log(key);

// const specialization=this.route.snapshot.queryParams;
// console.log('specialization ',specialization.specialization);
// this.special=specialization.specialization;


  //  this.route.queryParams.
  //  filter(params => params.area)
  //     .subscribe(params => {
  //       console.log(params); // {area: place}

  //       this.place = params.area;
  //       console.log(this.place); 
  //     });

  // this.sub = this.route
  //     .queryParams
  //     .subscribe(params => {
  //       console.log(params);
  //       this.sub=params.area;
  //       console.log(this.sub);
  //     });

  
//   this.route.queryParams.subscribe(params => {
//     console.log(' in search doctor');
//     this.area = params.get(params.area);
// })

// if(location.area==null || location.area==undefined ){
//   this.doctorservice.getAllDoctors().subscribe((data:any) => {
//     console.log(data);
//     this.doctors = data;

//   })

// }

// if(specialization.specialization===null || specialization.specialization===undefined){
    this.doctorservice.getAllDoctorsByArea(sessionStorage.getItem('key')).subscribe((data:any) => {
      if(location.area!==undefined || location.area!==null){
      console.log(data, ' by area doctors');
      this.doctors  =  data;
  }
}
  )
  // }

//   else if(specialization.specialization!=null || specialization.specialization!==undefined){
//     console.log('special method executed');
//     console.log('session storage data',sessionStorage.getItem('key'));
//   this.doctorservice.getAllDoctorsBySpecializationAndArea(specialization.specialization,sessionStorage.getItem('key')).subscribe((data:any)=> {
//     console.log(data);
//     console.log(location.area);
//     this.doctors = data;
//   })
// }

// else{
//   console.log("is this the component ???????? ***********")
//   this.doctorservice.getAllDoctorsBySpecializationAndArea(this.x).subscribe((data:any)=> {

//     console.log(data, "ajskhdkjahskjd");
//     console.log(location.area);
//     this.doctors = data;
  
//    })


this.doctorservice.byAreaDoctors.subscribe((data:any)=> {
    // if(location.area===null || location.area===undefined){
      console.log('hi');
      console.log(data);
      // console.log(location.area);
      this.doctors = data;
       
     
    }
   )




  


  // else{
  //   this.doctorservice.getAllDoctors().subscribe((data:any) => {
  //     console.log(data);
  //     this.doctors = data;
  
  //   })
        
  // }
  

      // Subscribe to that custom observale, filetr doctors

  //  this.doctorservice.filteredDoctors.subscribe((data:any) => {
  //    console.log(data);
  //    this.doctors  =  data
  //    //  data = data.restaurants.filter(e => {
  //    //    return (e.restaurant.photos !== undefined) ? e : null
  //    // })
  //    // console.log(data)
  //    // this.filteredDoctors = data;

  //  })

  

  //  this.doctorservice.byAreaDoctors.subscribe((data:any) => {
  //   console.log(data);
  //   this.doctors  =  data
  //   //  data = data.restaurants.filter(e => {
  //   //    return (e.restaurant.photos !== undefined) ? e : null
  //   // })
  //   // console.log(data)
  //   // this.filteredDoctors = data;

  // })

     //  this.doctorservice.searchSpecialization().subscribe((data:any) =>{
     //    console.log(data);
     //    this.doctors=data;
     //  })

}

// this.doctorservice.getAllDoctorsBySpecializationAndArea(this.special,sessionStorage.getItem('key')).subscribe((data:any)=> {
//   console.log(data);
//   // console.log(location.area);
//   this.doctors = data;
// })

passDetails(details) {
 // console.log("search Doctor Component", details)
         this.share.send(details);
         // this.share.doctorDetails.next(details);
         this.router.navigateByUrl("/doctorView");
}
routingto(emailId:string)
{
  
  console.log(emailId);
  this.schedulerService.getSlots(emailId).subscribe(data=>{
    this.slotData=JSON.stringify(data);
    this.slotData1=JSON.parse(this.slotData);
    console.log(this.slotData1);
  });
  this.myprofile.getDoctorDetails(emailId).subscribe(data =>{
    var response=JSON.stringify(data);
    var response1=JSON.parse(response);
   


    
  // this.doctor.name=response1.name;
  // this.doctor.clinicName=response1.clinicName;
  // this.doctor.emailId=response1.emailId;
  // this.address.address=response1.address.address;
  // this.address.area=response1.address.area; 
  // this.doctor.address = this.address;  

  let navigationExtras: NavigationExtras = {
    queryParams: {
        "name": response1.name,
        "clinicName": response1.clinicName,
        "emailId":response1.emailId,
        "address":response1.address.address,
        "area":response1.address.area,
        "todaym":this.slotData1.slots.todaym,
        "todaya":this.slotData1.slots.todaya,
        "todaye":this.slotData1.slots.todaye,
        "tomorrowm":this.slotData1.slots.tomorrowm,
        "tomorrowa":this.slotData1.slots.tomorrowa,
        "tomorrowe":this.slotData1.slots.tomorrowe,
        "overmorrowm":this.slotData1.slots.overmorrowm,
        "overmorrowa":this.slotData1.slots.overmorrowa,
        "overmorrowe":this.slotData1.slots.overmorrowe
      
    }
   
   
   
};
console.log(navigationExtras);

this.router.navigate(['/appointmentSlot'],navigationExtras);  
  }
    );  
  

}

}