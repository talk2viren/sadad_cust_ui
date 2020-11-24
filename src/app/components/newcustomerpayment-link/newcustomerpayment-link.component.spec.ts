import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomerpaymentLinkComponent } from './newcustomerpayment-link.component';

describe('NewcustomerpaymentLinkComponent', () => {
  let component: NewcustomerpaymentLinkComponent;
  let fixture: ComponentFixture<NewcustomerpaymentLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomerpaymentLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomerpaymentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
