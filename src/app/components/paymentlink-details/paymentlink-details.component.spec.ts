import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentlinkDetailsComponent } from './paymentlink-details.component';

describe('PaymentlinkDetailsComponent', () => {
  let component: PaymentlinkDetailsComponent;
  let fixture: ComponentFixture<PaymentlinkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentlinkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentlinkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
