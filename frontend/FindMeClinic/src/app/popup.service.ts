import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  
  public places : any [];
  public places1:any[];
  public city:any;
  public city1:any;
  public check :boolean = true;
  constructor() { 

    this.places1=this.places;
    this.city1=this.city;
  }
}
