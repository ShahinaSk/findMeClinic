import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorappointmentsComponent } from './doctorappointments.component';

describe('DoctorappointmentsComponent', () => {
  let component: DoctorappointmentsComponent;
  let fixture: ComponentFixture<DoctorappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
