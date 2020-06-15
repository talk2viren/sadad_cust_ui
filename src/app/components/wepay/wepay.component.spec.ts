import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WepayComponent } from './wepay.component';

describe('WepayComponent', () => {
  let component: WepayComponent;
  let fixture: ComponentFixture<WepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
