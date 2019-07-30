import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotBookingComponent } from './appointment-slot-booking.component';

describe('AppointmentSlotBookingComponent', () => {
  let component: AppointmentSlotBookingComponent;
  let fixture: ComponentFixture<AppointmentSlotBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentSlotBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
