import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-popup1',
  templateUrl: './popup1.component.html',
  styleUrls: ['./popup1.component.css']
})
export class Popup1Component implements OnInit {

  public places :any [];
  constructor(private popupService:PopupService,private dialog:MatDialog) { }

  ngOnInit() {

    console.log("Hiii Hello");
  }

  public hyderabad() {
  
    this.places =["Madinaguda","Miyapur", "Gachibowli","Ameerpet","SR Nagar","L.B Nagar","Kukatpalli"];
    this.popupService.places = this.places;
    // this.popupService.places1=this.places;
    this.popupService.city="Hyderabad";
    // this.popupService.city1="Hyderabad";
    const dialogRef = this.dialog.closeAll();
    this.popupService.check =false;
  }
  public bangalore() {
    this.places =["HSR Layout","Koramangala","Hebbal","Marathahalli","Jayanagar"];
    this.popupService.places = this.places;
    const dialogRef = this.dialog.closeAll();
    this.popupService.check =false;
  }
  public delhi() {
    this.places =["Ashok Nagar","Chattarpur","Civil Lines","Janakpuri"];
    this.popupService.places = this.places;
    const dialogRef = this.dialog.closeAll();
    this.popupService.check =false;
  }
  public mumbai() {
    this.places =["Bhandup","Ghatkopar"," Borivali","Colaba","Kurla","Govandi"];
    this.popupService.places = this.places;
    const dialogRef = this.dialog.closeAll();
    this.popupService.check =false;
  }
  public vijayawada() {
    this.places =["Benz circle","Ashok Nagar","Auto Nagar","Bandar Road","Poranki","RTC Colony"];
    this.popupService.places = this.places;
    const dialogRef = this.dialog.closeAll();
    this.popupService.check =false;
  }
  public chennai() {
    this.places =["Park town","perambur","Tharamani","K.K.Nagar","Chennai"];
    this.popupService.places = this.places;
    const dialogRef = this.dialog.closeAll();
    this.popupService.check =false;
  }
}



