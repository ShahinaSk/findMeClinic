import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctortimingsComponent } from './doctortimings.component';

describe('DoctortimingsComponent', () => {
  let component: DoctortimingsComponent;
  let fixture: ComponentFixture<DoctortimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctortimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctortimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
