import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickpayPaymentconfirmationComponent } from './quickpay-paymentconfirmation.component';

describe('QuickpayPaymentconfirmationComponent', () => {
  let component: QuickpayPaymentconfirmationComponent;
  let fixture: ComponentFixture<QuickpayPaymentconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickpayPaymentconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickpayPaymentconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
