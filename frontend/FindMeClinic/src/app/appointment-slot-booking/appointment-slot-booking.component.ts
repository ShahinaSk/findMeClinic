import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';


@Component({
  selector: 'app-appointment-slot-booking',
  templateUrl: './appointment-slot-booking.component.html',
  styleUrls: ['./appointment-slot-booking.component.css']
})
export class AppointmentSlotBookingComponent implements OnInit {

  name: string;
  clinicName: string;
  emailId: string;
  address: string;
  area: string;
  date: Date;
  slot: string;
  day: string;
  todaym: number;
  todaya: number;
  todaye: number;
  tomorrowm: number;
  tomorrowa: number;
  tomorrowe: number;
  overmorrowm: number;
  overmorrowa: number;
  overmorrowe: number;
  // nCnt1: number = 0;nCnt2: number = 0;nCnt3: number = 0;
  // nCnt4: number = 0;nCnt5: number = 0;nCnt6: number = 0;
  // nCnt7: number = 0;nCnt8: number = 0;nCnt9: number = 0;
  status1 = "false"; status2 = "false"; status3 = "false";
  status4 = "false"; status5 = "false"; status6 = "false";
  status7 = "false"; status8 = "false"; status9 = "false";
  key:string;
  value:number;

 


  constructor(private route: ActivatedRoute, private route1: Router, private schedulerService: SchedulerService) {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
      this.clinicName = params["clinicName"];
      this.emailId = params["emailId"];
      this.address = params["address"];
      this.area = params["area"];
      this.todaym = params["todaym"];
      this.todaya = params["todaya"];
      this.todaye = params["todaye"];
      this.tomorrowm = params["tomorrowm"];
      this.tomorrowa = params["tomorrowa"];
      this.tomorrowe = params["tomorrowe"];
      this.overmorrowm = params["overmorrowm"];
      this.overmorrowa = params["overmorrowa"];
      this.overmorrowe = params["overmorrowe"];

    });

    console.log(this.name + this.clinicName + this.emailId + this.address + this.area);
  }

  ngOnInit() {

    console.log(this.todaya + this.todaym + this.todaye + this.tomorrowm + this.tomorrowa + this.tomorrowe + this.overmorrowm + this.overmorrowa + this.overmorrowe);

    if (this.todaym == 15) {
      this.status1 = "true";

    }

    if (this.todaya == 15) {
      this.status2 = "true";
    }

    if (this.todaye == 15) {
      this.status3 = "true";
    }

    if (this.tomorrowm == 15) {
      this.status4 = "true";
    }

    if (this.tomorrowa == 15) {
      this.status5 = "true";
    }

    if (this.tomorrowe == 15) {
      this.status6 = "true";
    }

    if (this.overmorrowm == 15) {
      this.status7 = "true";
    }
    if (this.overmorrowa == 15) {
      this.status8 = "true";
    }
    if (this.overmorrowe == 15) {
      this.status9 = "true";
    }

    console.log(this.status2);

  }

  clickMe1(day: string, slot: string) {
    this.date = new Date();
    this.slot = slot;
    this.todaym =++ this.todaym;
    this.key="todaym";
    this.value=this.todaym;




  }
  clickMe2(day: string, slot: string) {
    this.date = new Date();
    this.slot = slot;
    this.todaya = ++this.todaya ;
    this.key="todaya";
    this.value=this.todaya;

  }
  clickMe3(day: string, slot: string) {
    this.date = new Date();
    this.slot = slot;
    this.todaye = ++this.todaye ;
    this.key="todaye";
    this.value=this.todaye;

  }
  clickMe4(day: string, slot: string) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 1);
    this.slot = slot;
    this.tomorrowm =++ this.tomorrowm;
    this.key="tomorrowm";
    this.value=this.tomorrowm;

  }
  clickMe5(day: string, slot: string) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 1);
    this.slot = slot;
    this.tomorrowa = ++this.tomorrowa ;
    this.key="tomorrowa";
    this.value=this.tomorrowa;

  }
  clickMe6(day: string, slot: string) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 1);
    this.slot = slot;
    this.tomorrowe =++ this.tomorrowe ;
    this.key="tomorrowe";
    this.value=this.tomorrowe;

  }
  clickMe7(day: string, slot: string) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 2);
    this.slot = slot;
    this.overmorrowm = ++this.overmorrowm ;
    this.key="overmorrowm";
    this.value=this.overmorrowm;

  }
  clickMe8(day: string, slot: string) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 2);
    this.slot = slot;
    this.overmorrowa = ++this.overmorrowa;
    this.key="overmorrowa";
    this.value=this.overmorrowa;

  }
  clickMe9(day: string, slot: string) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 2);
    this.slot = slot;
    this.overmorrowe = ++this.overmorrowe ;
    this.key="overmorrowe";
    this.value=this.overmorrowe;

  }

  routingto() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.name,
        "clinicName": this.clinicName,
        "emailId": this.emailId,
        "address": this.address,
        "area": this.area,
        "slot": this.slot,
        "appointmentDate": this.date
      }

    };

   
  
    this.schedulerService.putSlots(this.emailId,this.key,this.value).subscribe(data1 => {
      console.log("HI "+data1);
    });

    this.route1.navigate(['/confirmBooking'], navigationExtras);
  }

}

