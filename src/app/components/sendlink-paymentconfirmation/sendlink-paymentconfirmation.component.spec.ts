import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendlinkPaymentconfirmationComponent } from './sendlink-paymentconfirmation.component';

describe('SendlinkPaymentconfirmationComponent', () => {
  let component: SendlinkPaymentconfirmationComponent;
  let fixture: ComponentFixture<SendlinkPaymentconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendlinkPaymentconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendlinkPaymentconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
