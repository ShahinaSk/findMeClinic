import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabbed-pane-for-reg',
  templateUrl: './tabbed-pane-for-reg.component.html',
  styleUrls: ['./tabbed-pane-for-reg.component.css']
})
export class TabbedPaneForRegComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openpatient()
  {
    this.router.navigateByUrl('/patientregistration')
  }
}
