import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedPaneForRegComponent } from './tabbed-pane-for-reg.component';

describe('TabbedPaneForRegComponent', () => {
  let component: TabbedPaneForRegComponent;
  let fixture: ComponentFixture<TabbedPaneForRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedPaneForRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedPaneForRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
